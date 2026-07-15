import { FC, memo } from 'react';
import {
  AddToQueueIcon,
  FullScreenIcon,
  SkipBackIcon,
  SkipNextIcon,
} from '../../assets/icons';
import { IconButton, PlayButton } from '../Button';
import './styles.css';

export interface PlayerBarProps {
  /** true exibe pause no controle central. */
  playing?: boolean;
  onTogglePlay?: () => void;
  onSkipBack?: () => void;
  onSkipNext?: () => void;
  onFullScreen?: () => void;
  onAddToQueue?: () => void;
  className?: string;
}

/** Barra inferior do player: tela cheia, anterior, play/pause, proxima, adicionar a fila. */
export const PlayerBar: FC<PlayerBarProps> = memo(
  ({ playing = false, onTogglePlay, onSkipBack, onSkipNext, onFullScreen, onAddToQueue, className }) => (
    <div className={['ds-player-bar', className].filter(Boolean).join(' ')}>
      <IconButton aria-label='Tela cheia' onClick={onFullScreen} className='ds-player-bar__aux'>
        <FullScreenIcon size={20} />
      </IconButton>
      <div className='ds-player-bar__controls'>
        <IconButton aria-label='Faixa anterior' onClick={onSkipBack}>
          <SkipBackIcon size={20} />
        </IconButton>
        <PlayButton playing={playing} onClick={onTogglePlay} />
        <IconButton aria-label='Próxima faixa' onClick={onSkipNext}>
          <SkipNextIcon size={20} />
        </IconButton>
      </div>
      <IconButton aria-label='Adicionar à fila' onClick={onAddToQueue} className='ds-player-bar__aux'>
        <AddToQueueIcon size={20} />
      </IconButton>
    </div>
  ),
);

PlayerBar.displayName = 'PlayerBar';
export default PlayerBar;
