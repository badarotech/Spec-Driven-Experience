import { FC, memo } from 'react';
import { CaretDownIcon, CaretUpIcon } from '../../assets/icons';
import './styles.css';

export interface VoteControlProps {
  /** Saldo de votos exibido entre as setas. */
  votes: number;
  /** Voto da pessoa atual, colore a seta correspondente. */
  userVote?: 'up' | 'down' | null;
  /** true pinta a contagem na cor de destaque (topo da fila). */
  highlighted?: boolean;
  onUpvote?: () => void;
  onDownvote?: () => void;
  className?: string;
}

/** Pilula vertical de votacao (seta, contagem, seta). Uso: fila em votacao. */
export const VoteControl: FC<VoteControlProps> = memo(
  ({ votes, userVote = null, highlighted, onUpvote, onDownvote, className }) => (
    <div
      className={['ds-vote-control', className].filter(Boolean).join(' ')}
      role='group'
      aria-label={'Votos: ' + votes}
    >
      <button
        type='button'
        aria-label='Votar para subir'
        aria-pressed={userVote === 'up'}
        className={
          'ds-vote-control__arrow' + (userVote === 'up' ? ' ds-vote-control__arrow--active' : '')
        }
        onClick={onUpvote}
      >
        <CaretUpIcon size={12} />
      </button>
      <span
        className={
          'ds-vote-control__count' + (highlighted ? ' ds-vote-control__count--highlighted' : '')
        }
      >
        {votes}
      </span>
      <button
        type='button'
        aria-label='Votar para descer'
        aria-pressed={userVote === 'down'}
        className={
          'ds-vote-control__arrow' + (userVote === 'down' ? ' ds-vote-control__arrow--active' : '')
        }
        onClick={onDownvote}
      >
        <CaretDownIcon size={12} />
      </button>
    </div>
  ),
);

VoteControl.displayName = 'VoteControl';
export default VoteControl;
