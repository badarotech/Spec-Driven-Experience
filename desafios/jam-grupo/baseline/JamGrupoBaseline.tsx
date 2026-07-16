import { FC, useCallback, useState } from 'react';
import '../../../design-system/tokens/tokens.css';
import {
  FabButton,
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
 * Baseline: reprodução da tela atual da Jam do Spotify (fila por ordem de chegada),
 * montada apenas com componentes do design system. Serve como referência do estado
 * atual da experiência para o desafio jam-grupo.
 */

// Atenção: AvatarGroup usa "src"; addedBy (TrackMeta) usa "avatarUrl".
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
  },
  {
    id: '2',
    coverUrl: capas.laGirls,
    title: 'LA Girls',
    artists: 'Charlie Puth',
    addedBy: { name: 'Marco', avatarUrl: fotos.marco },
  },
  {
    id: '3',
    coverUrl: capas.easierRemix,
    title: 'Easier - Remix (with Charlie Puth)',
    artists: '5 Seconds of Summer, Charlie Puth',
    addedBy: { name: 'Sumit', avatarUrl: fotos.sumit },
  },
  {
    id: '4',
    coverUrl: capas.someTypeOfLove,
    title: 'Some Type of Love',
    artists: 'Charlie Puth',
    addedBy: { name: 'Você', avatarUrl: fotos.voce, isYou: true },
  },
  {
    id: '5',
    coverUrl: capas.iWarnedMyself,
    title: 'I Warned Myself',
    artists: 'Charlie Puth',
    addedBy: { name: 'Marco', avatarUrl: fotos.marco },
  },
];

export const JamGrupoBaseline: FC = () => {
  const [tocando, setTocando] = useState(false);
  const [fila, setFila] = useState<QueueTrack[]>(filaInicial);

  const reordenar = useCallback((de: number, para: number) => {
    setFila((atual) => {
      const proxima = [...atual];
      const [movida] = proxima.splice(de, 1);
      proxima.splice(para, 0, movida);
      return proxima;
    });
  }, []);

  return (
    <div className='jam-baseline'>
      <SessionHeader
        className='jam-baseline__cabecalho'
        title='Jam da Badaró'
        badgeLabel='Sessão social'
        participants={participantes}
        maxAvatars={3}
        onClose={() => {}}
        onInvite={() => {}}
        onLeave={() => {}}
      />

      <main className='jam-baseline__conteudo'>
        <SectionHeader className='jam-baseline__secao' title='Tocando agora' />
        <NowPlayingItem
          className='jam-baseline__tocando'
          track={{
            coverUrl: capas.sober,
            title: 'Sober',
            artists: 'G-Eazy, Charlie Puth',
            explicit: true,
          }}
        />

        <SectionHeader
          className='jam-baseline__secao'
          title='Próximas na fila'
          caption='Ordem de chegada · quem adiciona por último toca por último'
        />
        <QueueList
          className='jam-baseline__fila'
          mode='chegada'
          items={fila}
          onReorder={reordenar}
        />
      </main>

      <div className='jam-baseline__fab-faixa'>
        <FabButton className='jam-baseline__fab' onClick={() => {}}>
          Adicionar
        </FabButton>
      </div>

      <footer className='jam-baseline__rodape'>
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

export default JamGrupoBaseline;
