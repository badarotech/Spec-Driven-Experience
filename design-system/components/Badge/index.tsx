import { FC, ReactNode, memo } from 'react';
import { JamIcon } from '../../assets/icons';
import './styles.css';

export interface LiveBadgeProps {
  /** Texto do selo. Padrao: "ao vivo". */
  label?: string;
  className?: string;
}

/** Selo verde com ponto pulsante. Uso: fila em votacao "ao vivo". */
export const LiveBadge: FC<LiveBadgeProps> = memo(({ label = 'ao vivo', className }) => (
  <span className={['ds-live-badge', className].filter(Boolean).join(' ')}>
    <span className='ds-live-badge__dot' aria-hidden='true' />
    {label}
  </span>
));
LiveBadge.displayName = 'LiveBadge';

export interface ExplicitTagProps {
  className?: string;
}

/** Selo "E" de conteudo explicito, ao lado do titulo da faixa. */
export const ExplicitTag: FC<ExplicitTagProps> = memo(({ className }) => (
  <span
    className={['ds-explicit-tag', className].filter(Boolean).join(' ')}
    aria-label='conteudo explicito'
    title='Conteudo explicito'
  >
    E
  </span>
));
ExplicitTag.displayName = 'ExplicitTag';

export interface SessionBadgeProps {
  /** Texto do selo. Padrao: "Sessao social". */
  label?: string;
  /** Icone opcional antes do texto. Padrao: JamIcon. */
  icon?: ReactNode;
  className?: string;
}

/** Selo de contexto no topo da tela ("Sessao social"), verde com icone. */
export const SessionBadge: FC<SessionBadgeProps> = memo(
  ({ label = 'Sessão social', icon, className }) => (
    <span className={['ds-session-badge', className].filter(Boolean).join(' ')}>
      {icon ?? <JamIcon size={14} />}
      {label}
    </span>
  ),
);
SessionBadge.displayName = 'SessionBadge';
