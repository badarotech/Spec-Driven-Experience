import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import '../../../design-system/tokens/tokens.css';
import {
  FabButton,
  LiveBadge,
  NowPlayingItem,
  PlayerBar,
  QueueList,
  QueueTrack,
  SectionHeader,
  SessionHeader,
} from '../../../design-system';
import { capas, fotos } from './capas';
import './styles.css';

/**
 * Desenho: SPEC-01 (Fila em votação, decisão coletiva sobre a ordem da fila).
 * Substitui, na sessão em grupo, o modo `chegada` do baseline pelo modo `votacao`:
 * cada faixa tem um VoteControl e a ordem é recalculada pelo saldo de votos do grupo.
 * Ver desafios/jam-grupo/spec-design.md (SPEC-01) para o fluxo e critérios completos.
 */

// Atenção: AvatarGroup usa "src"; addedBy (TrackMeta) usa "avatarUrl".
const participantes = [
  { name: 'Aline', src: fotos.aline },
  { name: 'Marco', src: fotos.marco },
  { name: 'Sumit', src: fotos.sumit },
  { name: 'Você', src: fotos.voce },
  { name: 'Léo', src: fotos.leo },
];

// Saldo inicial já ordenado por votos: registra o estado "Sucesso" descrito na spec.
const filaInicial: QueueTrack[] = [
  {
    id: '1',
    coverUrl: capas.weDontTalkAnymore,
    title: 'We Don’t Talk Anymore (feat. Selena Gomez)',
    artists: 'Charlie Puth, Selena Gomez, DROELOE',
    addedBy: { name: 'Aline', avatarUrl: fotos.aline },
    votes: 5,
    userVote: null,
  },
  {
    id: '2',
    coverUrl: capas.laGirls,
    title: 'LA Girls',
    artists: 'Charlie Puth',
    addedBy: { name: 'Marco', avatarUrl: fotos.marco },
    votes: 3,
    userVote: null,
  },
  {
    id: '3',
    coverUrl: capas.easierRemix,
    title: 'Easier - Remix (with Charlie Puth)',
    artists: '5 Seconds of Summer, Charlie Puth',
    addedBy: { name: 'Sumit', avatarUrl: fotos.sumit },
    votes: 3,
    userVote: null,
  },
  {
    id: '4',
    coverUrl: capas.someTypeOfLove,
    title: 'Some Type of Love',
    artists: 'Charlie Puth',
    addedBy: { name: 'Você', avatarUrl: fotos.voce, isYou: true },
    votes: 1,
    userVote: 'up',
  },
  {
    id: '5',
    coverUrl: capas.iWarnedMyself,
    title: 'I Warned Myself',
    artists: 'Charlie Puth',
    addedBy: { name: 'Marco', avatarUrl: fotos.marco },
    votes: 0,
    userVote: null,
  },
];

const LEGENDA_PADRAO = 'Ordem definida pelo grupo · toque ↑ ou ↓ para votar';
const LEGENDA_ERRO = 'Não foi possível registrar seu voto agora. Toque de novo.';
const ERRO_DURACAO_MS = 4000;
const INTERVALO_MIN_ANUNCIO_MS = 4000;
// Simula a latência e a instabilidade de uma confirmação de servidor real (sem backend nesta tela).
const CONFIRMACAO_SIMULADA_MS = 400;
const CHANCE_DE_FALHA_SIMULADA = 1 / 6;
const CARREGAMENTO_SIMULADO_MS = 600;

const ordenarPorVotos = (itens: QueueTrack[]): QueueTrack[] =>
  [...itens].sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));

type DocumentComViewTransition = Document & {
  startViewTransition: (cb: () => void) => { finished: Promise<void> };
};

// Referencia a transicao em andamento: iniciar outra por cima faz o navegador
// pular a atual direto para o fim (comportamento nativo da API), o que e
// visualmente mais estranho do que so aplicar a proxima atualizacao sem animar.
let transicaoEmAndamento: Promise<void> | null = null;

/**
 * Aplica uma atualizacao de DOM dentro de uma View Transition, quando o navegador
 * suporta a API (Chromium). Sem suporte (Firefox, Safari), ou com uma transicao
 * ja em andamento (cliques em sequencia rapida), aplica direto, sem animacao.
 * Usa flushSync para garantir que o React já tenha commitado o DOM antes do
 * navegador capturar o snapshot "depois": sem isso a API nao anima nada.
 */
const comTransicaoDeVisualizacao = (atualizar: () => void) => {
  const suportado = typeof document !== 'undefined' && 'startViewTransition' in document;
  if (!suportado || transicaoEmAndamento) {
    atualizar();
    return;
  }

  const transicao = (document as DocumentComViewTransition).startViewTransition(() =>
    flushSync(atualizar),
  );
  transicaoEmAndamento = transicao.finished.finally(() => {
    transicaoEmAndamento = null;
  });
};

/** Aplica o toque de voto a um item: cada clique soma ou subtrai 1, sem limite por pessoa. */
const aplicarVoto = (item: QueueTrack, sentido: 'up' | 'down'): Pick<QueueTrack, 'votes' | 'userVote'> => {
  const votesAtual = item.votes ?? 0;
  const delta = sentido === 'up' ? 1 : -1;
  return { votes: votesAtual + delta, userVote: sentido };
};

export const JamGrupoVotacao: FC = () => {
  const [tocando, setTocando] = useState(false);
  const [fila, setFila] = useState<QueueTrack[]>(filaInicial);
  const [carregando, setCarregando] = useState(true);
  const [erroTemporario, setErroTemporario] = useState(false);
  const [anuncioFila, setAnuncioFila] = useState('');

  const ordemAnteriorRef = useRef<string[]>(filaInicial.map((item) => item.id));
  const ultimoAnuncioRef = useRef(0);
  const anuncioTimeoutRef = useRef<number>();
  const erroTimeoutRef = useRef<number>();

  // Estado "Carregando": nenhum componente de skeleton/spinner existe no design system
  // (lacuna identificada em spec-design.md); usa-se o texto simples combinado ali como alternativa mínima.
  useEffect(() => {
    const id = window.setTimeout(() => setCarregando(false), CARREGAMENTO_SIMULADO_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(anuncioTimeoutRef.current);
      window.clearTimeout(erroTimeoutRef.current);
    },
    [],
  );

  /** Atende: Acessibilidade > Anúncio de reordenação para leitor de tela (aria-live, com intervalo mínimo). */
  const anunciarSeMudou = useCallback((novaOrdem: string[]) => {
    const mudou = novaOrdem.some((id, i) => id !== ordemAnteriorRef.current[i]);
    ordemAnteriorRef.current = novaOrdem;
    if (!mudou) return;

    const agora = Date.now();
    const espera = Math.max(0, INTERVALO_MIN_ANUNCIO_MS - (agora - ultimoAnuncioRef.current));
    window.clearTimeout(anuncioTimeoutRef.current);
    anuncioTimeoutRef.current = window.setTimeout(() => {
      ultimoAnuncioRef.current = Date.now();
      setAnuncioFila('A fila foi atualizada.');
    }, espera);
  }, []);

  const mostrarErroTemporario = useCallback(() => {
    setErroTemporario(true);
    window.clearTimeout(erroTimeoutRef.current);
    erroTimeoutRef.current = window.setTimeout(() => setErroTemporario(false), ERRO_DURACAO_MS);
  }, []);

  /**
   * Atende: NEC-01-CA1 (voto em qualquer faixa da fila) e NEC-02-CA1 (ordem recalculada por saldo).
   * Atualização otimista (Fluxo, item 4) com ramo de erro (Fluxo, item 8): se a confirmação
   * simulada falhar, a fila volta ao estado anterior ao toque e a legenda avisa por alguns segundos.
   */
  const votar = useCallback(
    (id: string, sentido: 'up' | 'down') => {
      let estadoAnterior: QueueTrack[] = [];

      comTransicaoDeVisualizacao(() => {
        setFila((atual) => {
          estadoAnterior = atual;
          const atualizada = ordenarPorVotos(
            atual.map((item) => (item.id === id ? { ...item, ...aplicarVoto(item, sentido) } : item)),
          );
          anunciarSeMudou(atualizada.map((item) => item.id));
          return atualizada;
        });
      });

      window.setTimeout(() => {
        if (Math.random() < CHANCE_DE_FALHA_SIMULADA) {
          comTransicaoDeVisualizacao(() => setFila(estadoAnterior));
          ordemAnteriorRef.current = estadoAnterior.map((item) => item.id);
          mostrarErroTemporario();
        }
      }, CONFIRMACAO_SIMULADA_MS);
    },
    [anunciarSeMudou, mostrarErroTemporario],
  );

  return (
    <div className='jam-votacao'>
      <SessionHeader
        className='jam-votacao__cabecalho'
        title='Jam da Badaró'
        badgeLabel='Sessão social'
        participants={participantes}
        maxAvatars={3}
        onClose={() => {}}
        onInvite={() => {}}
        onLeave={() => {}}
      />

      <main className='jam-votacao__conteudo'>
        <SectionHeader className='jam-votacao__secao' title='Tocando agora' />
        <NowPlayingItem
          className='jam-votacao__tocando'
          track={{
            coverUrl: capas.sober,
            title: 'Sober',
            artists: 'G-Eazy, Charlie Puth',
            explicit: true,
          }}
        />

        {/* Atende: NEC-01-CA2 e NEC-02-CA2 (legenda, selo "ao vivo" e saldo comunicam a decisão coletiva) */}
        <SectionHeader
          className='jam-votacao__secao'
          title='Fila em votação'
          caption={erroTemporario ? LEGENDA_ERRO : LEGENDA_PADRAO}
          trailing={<LiveBadge />}
        />

        {carregando ? (
          <p className='jam-votacao__carregando'>Carregando fila...</p>
        ) : fila.length === 0 ? (
          // Atende: Estados > Vazio
          <div className='jam-votacao__vazio'>
            <p className='jam-votacao__vazio-titulo'>A fila está vazia</p>
            <p className='jam-votacao__vazio-corpo'>
              Adicione a próxima música e o grupo decide o resto.
            </p>
          </div>
        ) : (
          <QueueList
            className='jam-votacao__fila'
            mode='votacao'
            items={fila}
            highlightFirst
            onUpvote={(id: string) => votar(id, 'up')}
            onDownvote={(id: string) => votar(id, 'down')}
          />
        )}

        {/* Atende: Acessibilidade > Anúncio de reordenação para leitor de tela */}
        <p className='jam-votacao__anuncio-fila' role='status' aria-live='polite'>
          {anuncioFila}
        </p>
      </main>

      <div className='jam-votacao__fab-faixa'>
        <FabButton className='jam-votacao__fab' onClick={() => {}}>
          Adicionar
        </FabButton>
      </div>

      <footer className='jam-votacao__rodape'>
        <PlayerBar
          playing={tocando}
          onTogglePlay={() => setTocando((v) => !v)}
          onSkipBack={() => {}}
          onSkipNext={() => {}}
          onFullScreen={() => {}}
          onAddToQueue={() => {}}
        />
      </footer>
    </div>
  );
};

export default JamGrupoVotacao;
