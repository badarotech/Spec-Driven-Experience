import { FC, ReactNode, memo } from 'react';
import './styles.css';

export interface SectionHeaderProps {
  /** Titulo da secao ("Tocando agora", "Fila em votacao", "Proximas na fila"). */
  title: string;
  /** Legenda sob o titulo ("Ordem definida pelo grupo...", "Ordem de chegada..."). */
  caption?: string;
  /** Conteudo a direita do titulo (ex.: LiveBadge). */
  trailing?: ReactNode;
  className?: string;
}

/** Cabecalho de secao de conteudo, com legenda e area a direita opcionais. */
export const SectionHeader: FC<SectionHeaderProps> = memo(
  ({ title, caption, trailing, className }) => (
    <header className={['ds-section-header', className].filter(Boolean).join(' ')}>
      <div className='ds-section-header__row'>
        <h2 className='ds-section-header__title'>{title}</h2>
        {trailing}
      </div>
      {caption && <p className='ds-section-header__caption'>{caption}</p>}
    </header>
  ),
);

SectionHeader.displayName = 'SectionHeader';
export default SectionHeader;
