import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import '../../../design-system/tokens/tokens.css';
import {
  AddIcon,
  NowPlayingItem,
  PillButton,
  PlayerBar,
  QueueTrack,
  SessionHeader,
  TrackMeta,
} from '../../../design-system';
import { capas, fotos } from './capas';
import './styles.css';

/**
 * Protótipo exploratório (desenho-v2), fora do fluxo formal do SDX.
 * Não corresponde a nenhuma Spec de Design aprovada em spec-design.md: é uma
 * variação visual/técnica pedida diretamente, testando um padrão de votação
 * via bottom-drawer que ainda não foi especificado. Ver README.md desta pasta.
 * Ponto de partida: cópia de desafios/jam-grupo/desenho/ (SPEC-01, mode='votacao').
 */

const participantes = [
  { name: 'Aline', src: fotos.aline },
  { name: 'Marco', src: fotos.marco },
  { name: 'Sumit', src: fotos.sumit },
  { name: 'Você', src: fotos.voce },
  { name: 'Léo', src: fotos.leo },
];

const filaInicial: QueueTrack[] = [
  {
    id: '1',
    coverUrl: capas.weDontTalkAnymore,
    title: 'We Don’t Talk Anymore (feat. Selena Gomez)',
    artists: 'Charlie Puth, Selena Gomez, DROELOE',
    addedBy: { name: 'Aline', avatarUrl: fotos.aline },
    votes: 4,
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

const ordenarPorVotos = (itens: QueueTrack[]): QueueTrack[] =>
  [...itens].sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));

type DocumentComViewTransition = Document & {
  startViewTransition: (cb: () => void) => { finished: Promise<void> };
};

let transicaoEmAndamento: Promise<void> | null = null;

/**
 * Aplica uma atualizacao de DOM dentro de uma View Transition, quando o navegador
 * suporta a API (Chromium). Sem suporte, ou com uma transicao ja em andamento,
 * aplica direto, sem animacao.
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

/** Aplica o toque de voto a um item: registra, troca ou desfaz, conforme o voto atual da pessoa. */
const aplicarVoto = (item: QueueTrack, sentido: 'up' | 'down'): Pick<QueueTrack, 'votes' | 'userVote'> => {
  const votesAtual = item.votes ?? 0;
  const delta = sentido === 'up' ? 1 : -1;

  if (item.userVote === sentido) {
    return { votes: votesAtual - delta, userVote: null };
  }
  if (item.userVote == null) {
    return { votes: votesAtual + delta, userVote: sentido };
  }
  return { votes: votesAtual + delta * 2, userVote: sentido };
};

/**
 * Botão circular de voto (protótipo, não existe hoje no design system).
 * Estados: neutro (cinza), ativo "up" (verde) e ativo "down" (vermelho).
 */
const BotaoVotoCircular: FC<{
  direcao: 'up' | 'down';
  ativo: boolean;
  onClick: () => void;
  label: string;
}> = ({ direcao, ativo, onClick, label }) => (
  <button
    type='button'
    aria-label={label}
    aria-pressed={ativo}
    className={
      'jam-v2-voto-circular' +
      (ativo ? ' jam-v2-voto-circular--' + direcao + '-ativo' : '')
    }
    onClick={onClick}
  >
    <svg width='12' height='12' viewBox='0 0 12 12' aria-hidden='true'>
      {direcao === 'up' ? (
        <path d='M6 2 11 9H1z' fill='currentColor' />
      ) : (
        <path d='M6 10 1 3h10z' fill='currentColor' />
      )}
    </svg>
  </button>
);

export const JamGrupoVotacao: FC = () => {
  const [tocando, setTocando] = useState(false);
  const [fila, setFila] = useState<QueueTrack[]>(filaInicial);
  const [drawerAberto, setDrawerAberto] = useState(false);

  const ordemAnteriorRef = useRef<string[]>(filaInicial.map((item) => item.id));

  const votar = useCallback((id: string, sentido: 'up' | 'down') => {
    comTransicaoDeVisualizacao(() => {
      setFila((atual) => {
        const atualizada = ordenarPorVotos(
          atual.map((item) => (item.id === id ? { ...item, ...aplicarVoto(item, sentido) } : item)),
        );
        ordemAnteriorRef.current = atualizada.map((item) => item.id);
        return atualizada;
      });
    });
  }, []);

  // Fecha o drawer com Esc, sem exigir navegar até um botão de fechar.
  useEffect(() => {
    if (!drawerAberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerAberto(false);
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [drawerAberto]);

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
        <p className='jam-votacao__secao-titulo'>Tocando agora</p>
        <NowPlayingItem
          className='jam-votacao__tocando'
          track={{
            coverUrl: capas.sober,
            title: 'Sober',
            artists: 'G-Eazy, Charlie Puth',
            explicit: true,
          }}
        />

        <div className='jam-v2-acoes'>
          <PillButton
            variant='brand'
            size='md'
            className='jam-v2-acoes__adicionar'
            disabled
            aria-disabled='true'
          >
            <AddIcon size={16} />
            Adicionar
          </PillButton>
          <PillButton
            variant='outline'
            size='md'
            className='jam-v2-acoes__votar'
            onClick={() => setDrawerAberto(true)}
            aria-haspopup='true'
            aria-expanded={drawerAberto}
          >
            Votar na ordem das faixas
          </PillButton>
        </div>

        <p className='jam-votacao__secao-titulo jam-votacao__secao-titulo--fila'>
          Próximas na fila:
        </p>

        <ul className='jam-v2-fila-limpa'>
          {fila.map((item) => {
            const { id, votes: _votes, userVote: _userVote, ...track } = item;
            return (
              <li key={id} className='jam-v2-fila-limpa__item'>
                <TrackMeta {...track} />
              </li>
            );
          })}
        </ul>
      </main>

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

      {/* Sobreposição: fecha o drawer ao tocar fora dele. */}
      {drawerAberto && (
        <div className='jam-v2-drawer-overlay' onClick={() => setDrawerAberto(false)} />
      )}

      <div
        className={'jam-v2-drawer' + (drawerAberto ? ' jam-v2-drawer--aberto' : '')}
        role='dialog'
        aria-modal='true'
        aria-label='Votação da ordem das faixas'
      >
        <div className='jam-v2-drawer__handle' aria-hidden='true' />
        <h2 className='jam-v2-drawer__titulo'>Votação</h2>
        <p className='jam-v2-drawer__subtitulo'>
          Vote para mover a ordem das faixas pra cima ou para baixo. As mais votadas vão aparecer
          automaticamente no topo da lista.
        </p>

        <ul className='jam-v2-drawer__fila'>
          {fila.map((item) => {
            const { id, votes = 0, userVote, ...track } = item;
            return (
              <li key={id} className='jam-v2-drawer__item' style={{ viewTransitionName: 'ds-queue-item-' + id }}>
                <TrackMeta {...track} className='jam-v2-drawer__track' />
                <div className='jam-v2-drawer__votos'>
                  <BotaoVotoCircular
                    direcao='down'
                    ativo={userVote === 'down'}
                    onClick={() => votar(id, 'down')}
                    label='Votar para descer'
                  />
                  <BotaoVotoCircular
                    direcao='up'
                    ativo={userVote === 'up'}
                    onClick={() => votar(id, 'up')}
                    label='Votar para subir'
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default JamGrupoVotacao;
