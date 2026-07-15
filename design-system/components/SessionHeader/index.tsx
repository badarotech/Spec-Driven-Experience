import { FC, memo } from 'react';
import { CloseIcon } from '../../assets/icons';
import { AvatarGroup, AvatarGroupUser } from '../AvatarGroup';
import { SessionBadge } from '../Badge';
import { IconButton, PillButton } from '../Button';
import './styles.css';

export interface SessionHeaderProps {
  /** Nome da sessao ("Jam da Badaro"). */
  title: string;
  /** Texto do selo de contexto. Padrao: "Sessao social". */
  badgeLabel?: string;
  /** Participantes exibidos como AvatarGroup. */
  participants: AvatarGroupUser[];
  /** Maximo de avatares antes do "+N". Padrao: 3. */
  maxAvatars?: number;
  /** Rotulos das acoes. Padrao: "Convidar" e "Sair". */
  inviteLabel?: string;
  leaveLabel?: string;
  onClose?: () => void;
  onInvite?: () => void;
  onLeave?: () => void;
  className?: string;
}

/** Cabecalho da tela de sessao social: fechar, selo, titulo, participantes e acoes. */
export const SessionHeader: FC<SessionHeaderProps> = memo(
  ({
    title,
    badgeLabel,
    participants,
    maxAvatars = 3,
    inviteLabel = 'Convidar',
    leaveLabel = 'Sair',
    onClose,
    onInvite,
    onLeave,
    className,
  }) => (
    <header className={['ds-session-header', className].filter(Boolean).join(' ')}>
      <div className='ds-session-header__top'>
        <IconButton aria-label='Fechar sessão' onClick={onClose}>
          <CloseIcon size={20} />
        </IconButton>
        <SessionBadge label={badgeLabel} />
        <span className='ds-session-header__spacer' aria-hidden='true' />
      </div>
      <h1 className='ds-session-header__title'>{title}</h1>
      <div className='ds-session-header__actions'>
        <AvatarGroup users={participants} max={maxAvatars} size='md' />
        <PillButton variant='outline' onClick={onInvite}>
          {inviteLabel}
        </PillButton>
        <PillButton variant='outline' onClick={onLeave}>
          {leaveLabel}
        </PillButton>
      </div>
    </header>
  ),
);

SessionHeader.displayName = 'SessionHeader';
export default SessionHeader;
