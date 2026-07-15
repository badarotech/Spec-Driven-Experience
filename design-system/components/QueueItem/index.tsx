import { FC, ReactNode, memo } from 'react';
import { TrackMeta, TrackMetaProps } from '../TrackMeta';
import './styles.css';

export interface QueueItemProps {
  /** Posicao na fila (1, 2, 3...). */
  position: number;
  /** Dados da faixa, incluindo quem adicionou (addedBy). */
  track: TrackMetaProps;
  /** Controle a direita: VoteControl, DragHandle ou outro. */
  trailing?: ReactNode;
  className?: string;
}

/** Linha de fila: posicao, faixa e controle a direita. Renderize dentro de QueueList. */
export const QueueItem: FC<QueueItemProps> = memo(({ position, track, trailing, className }) => (
  <li className={['ds-queue-item', className].filter(Boolean).join(' ')}>
    <span className='ds-queue-item__position' aria-hidden='true'>
      {position}
    </span>
    <TrackMeta {...track} className='ds-queue-item__track' />
    {trailing && <div className='ds-queue-item__trailing'>{trailing}</div>}
  </li>
));

QueueItem.displayName = 'QueueItem';
export default QueueItem;
