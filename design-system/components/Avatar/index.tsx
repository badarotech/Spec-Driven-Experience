import { FC, memo } from 'react';
import './styles.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

export interface AvatarProps {
  /** URL da imagem. Sem imagem, exibe a inicial do nome. */
  src?: string;
  /** Nome da pessoa (usado como alt e fallback). */
  name: string;
  /** xs 16px, sm 24px, md 32px, lg 48px. Padrao: md. */
  size?: AvatarSize;
  className?: string;
}

/** Avatar circular de participante. Fallback: inicial sobre fundo elevado. */
export const Avatar: FC<AvatarProps> = memo(({ src, name, size = 'md', className }) => {
  const cls = ['ds-avatar', 'ds-avatar--' + size, className].filter(Boolean).join(' ');
  if (src) {
    return <img className={cls} src={src} alt={name} title={name} />;
  }
  return (
    <span className={cls + ' ds-avatar--fallback'} role='img' aria-label={name} title={name}>
      {name.trim().charAt(0).toUpperCase()}
    </span>
  );
});

Avatar.displayName = 'Avatar';
export default Avatar;
