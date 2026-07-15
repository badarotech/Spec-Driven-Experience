import { FC, memo } from 'react';
import { Avatar, AvatarSize } from '../Avatar';
import './styles.css';

export interface AvatarGroupUser {
  src?: string;
  name: string;
}

export interface AvatarGroupProps {
  /** Participantes, na ordem de exibicao. */
  users: AvatarGroupUser[];
  /** Quantos avatares mostrar antes do excedente "+N". Padrao: 3. */
  max?: number;
  /** Tamanho de cada avatar. Padrao: md. */
  size?: AvatarSize;
  className?: string;
}

/** Pilha de avatares sobrepostos com excedente "+N". Uso: participantes da sessao. */
export const AvatarGroup: FC<AvatarGroupProps> = memo(
  ({ users, max = 3, size = 'md', className }) => {
    const visible = users.slice(0, max);
    const overflow = users.length - visible.length;
    const cls = ['ds-avatar-group', 'ds-avatar-group--' + size, className]
      .filter(Boolean)
      .join(' ');
    return (
      <div className={cls} role='group' aria-label={users.length + ' participantes'}>
        {visible.map((user, index) => (
          <Avatar key={user.name + index} src={user.src} name={user.name} size={size} />
        ))}
        {overflow > 0 && (
          <span className={'ds-avatar ds-avatar--' + size + ' ds-avatar-group__overflow'}>
            +{overflow}
          </span>
        )}
      </div>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';
export default AvatarGroup;
