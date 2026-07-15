import { FC, memo } from 'react';
import { Avatar } from '../Avatar';
import { TrackMeta, TrackMetaProps } from '../TrackMeta';
import './styles.css';

export interface NowPlayingItemProps {
  /** Dados da faixa em reproducao. O titulo e destacado em verde. */
  track: Omit<TrackMetaProps, 'highlighted' | 'addedBy'>;
  /** Avatar de quem adicionou a faixa, a direita da linha. */
  listener?: { name: string; avatarUrl?: string };
  className?: string;
}

/** Linha "Tocando agora": faixa com titulo verde e avatar de quem adicionou. */
export const NowPlayingItem: FC<NowPlayingItemProps> = memo(
  ({ track, listener, className }) => (
    <div className={['ds-now-playing-item', className].filter(Boolean).join(' ')}>
      <TrackMeta {...track} highlighted />
      {listener && <Avatar src={listener.avatarUrl} name={listener.name} size='sm' />}
    </div>
  ),
);

NowPlayingItem.displayName = 'NowPlayingItem';
export default NowPlayingItem;
