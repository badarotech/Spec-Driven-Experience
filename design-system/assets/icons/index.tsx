/**
 * Icones do Design System (SDX).
 * Paths extraidos de spotify-react-web-client (src/components/Icons/index.tsx),
 * refatorados para receber tamanho e cor via props.
 * Todos herdam a cor do texto por padrao (currentColor).
 */
import { FC, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Lado do icone em pixels. Padrao: 16. */
  size?: number;
}

const base = (props: IconProps) => {
  const { size = 16, fill = 'currentColor', ...rest } = props;
  return {
    width: size,
    height: size,
    fill,
    viewBox: '0 0 16 16',
    role: 'img' as const,
    'aria-hidden': true as const,
    ...rest,
  };
};

/** Fechar (X). Uso: fechar a sessao social. */
export const CloseIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z' />
  </svg>
);

/** Play (triangulo). Uso: PlayButton. */
export const PlayIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z' />
  </svg>
);

/** Pause (duas barras). Uso: PlayButton em reproducao. */
export const PauseIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z' />
  </svg>
);

/** Faixa anterior. Uso: PlayerBar. */
export const SkipBackIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z' />
  </svg>
);

/** Proxima faixa. Uso: PlayerBar. */
export const SkipNextIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z' />
  </svg>
);

/** Adicionar (+). Uso: FabButton "Adicionar". */
export const AddIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z' />
  </svg>
);

/** Adicionar a fila. Uso: PlayerBar. */
export const AddToQueueIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M16 15H2v-1.5h14V15zm0-4.5H2V9h14v1.5zm-8.034-6A5.484 5.484 0 0 1 7.187 6H13.5a2.5 2.5 0 0 0 0-5H7.966c.159.474.255.978.278 1.5H13.5a1 1 0 1 1 0 2H7.966zM2 2V0h1.5v2h2v1.5h-2v2H2v-2H0V2h2z' />
  </svg>
);

/** Tela cheia (setas para fora). Uso: PlayerBar. */
export const FullScreenIcon: FC<IconProps> = (props) => (
  <svg {...base({ viewBox: '0 0 24 24', ...props })}>
    <path d='M21.707 2.293a1 1 0 0 1 0 1.414L17.414 8h1.829a1 1 0 0 1 0 2H14V4.757a1 1 0 1 1 2 0v1.829l4.293-4.293a1 1 0 0 1 1.414 0zM2.293 21.707a1 1 0 0 1 0-1.414L6.586 16H4.757a1 1 0 0 1 0-2H10v5.243a1 1 0 0 1-2 0v-1.829l-4.293 4.293a1 1 0 0 1-1.414 0z' />
  </svg>
);

/** Seta de voto para cima (triangulo cheio). Uso: VoteControl. */
export const CaretUpIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M14 10 8 4l-6 6h12z' />
  </svg>
);

/** Seta de voto para baixo (triangulo cheio). Uso: VoteControl. */
export const CaretDownIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='m14 6-6 6-6-6h12z' />
  </svg>
);

/** Alca de arrastar (duas linhas). Uso: DragHandle na fila por ordem de chegada. */
export const DragHandleIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M2 5.25h12v1.5H2v-1.5zm0 4h12v1.5H2v-1.5z' />
  </svg>
);

/** Sessao social / Jam (nota com ondas). Uso: selo "Sessao social". */
export const JamIcon: FC<IconProps> = (props) => (
  <svg {...base(props)}>
    <path d='M10.5 1.5a.75.75 0 0 0-1.03-.696l-5 2A.75.75 0 0 0 4 3.5v6.792A2.74 2.74 0 0 0 2.75 10a2.75 2.75 0 1 0 2.75 2.75V6.008l3.5-1.4v4.184A2.74 2.74 0 0 0 7.75 8.5a2.75 2.75 0 1 0 2.75 2.75V1.5zM12.53 3.47a.75.75 0 0 1 1.06 0 4.95 4.95 0 0 1 0 7.06.75.75 0 1 1-1.06-1.06 3.45 3.45 0 0 0 0-4.94.75.75 0 0 1 0-1.06z' />
  </svg>
);
