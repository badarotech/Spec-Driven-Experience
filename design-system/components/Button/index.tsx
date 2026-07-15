import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';
import { AddIcon, PauseIcon, PlayIcon } from '../../assets/icons';
import './styles.css';

type NativeButton = ButtonHTMLAttributes<HTMLButtonElement>;

export interface PillButtonProps extends NativeButton {
  /**
   * outline: borda sutil, fundo transparente (Convidar, Sair).
   * solid: fundo branco, texto preto.
   * brand: fundo verde, texto preto.
   */
  variant?: 'outline' | 'solid' | 'brand';
  /** sm 32px, md 40px de altura. Padrao: sm. */
  size?: 'sm' | 'md';
  children: ReactNode;
}

/** Botao pilula. Uso: acoes da sessao (Convidar, Sair). */
export const PillButton: FC<PillButtonProps> = memo(
  ({ variant = 'outline', size = 'sm', children, className, ...rest }) => (
    <button
      type='button'
      className={['ds-pill-button', 'ds-pill-button--' + variant, 'ds-pill-button--' + size, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <span>{children}</span>
    </button>
  ),
);
PillButton.displayName = 'PillButton';

export interface IconButtonProps extends NativeButton {
  /** Rotulo acessivel obrigatorio (o botao nao tem texto visivel). */
  'aria-label': string;
  children: ReactNode;
}

/** Botao transparente so de icone. Uso: fechar sessao, controles auxiliares do player. */
export const IconButton: FC<IconButtonProps> = memo(({ children, className, ...rest }) => (
  <button
    type='button'
    className={['ds-icon-button', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </button>
));
IconButton.displayName = 'IconButton';

export interface PlayButtonProps extends NativeButton {
  /** true exibe pause; false exibe play. */
  playing?: boolean;
  /** Diametro em pixels. Padrao: 56 (token size.playButton). */
  diameter?: number;
}

/** Botao circular branco de play/pause. Uso: controle central do player. */
export const PlayButton: FC<PlayButtonProps> = memo(
  ({ playing = false, diameter = 56, className, style, ...rest }) => (
    <button
      type='button'
      aria-label={playing ? 'Pausar' : 'Tocar'}
      className={['ds-play-button', className].filter(Boolean).join(' ')}
      style={{ width: diameter, height: diameter, ...style }}
      {...rest}
    >
      {playing ? <PauseIcon size={diameter * 0.4} /> : <PlayIcon size={diameter * 0.4} />}
    </button>
  ),
);
PlayButton.displayName = 'PlayButton';

export interface FabButtonProps extends NativeButton {
  /** Icone antes do texto. Padrao: AddIcon. */
  icon?: ReactNode;
  children: ReactNode;
}

/** Botao flutuante verde com sombra. Uso: "Adicionar" faixa a fila. */
export const FabButton: FC<FabButtonProps> = memo(({ icon, children, className, ...rest }) => (
  <button
    type='button'
    className={['ds-fab-button', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {icon ?? <AddIcon size={16} />}
    <span>{children}</span>
  </button>
));
FabButton.displayName = 'FabButton';
