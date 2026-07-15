import { FC, HTMLAttributes, memo } from 'react';
import { DragHandleIcon } from '../../assets/icons';
import './styles.css';

export interface DragHandleProps extends HTMLAttributes<HTMLSpanElement> {
  /** Rotulo acessivel. Padrao: "Reordenar". */
  label?: string;
}

/** Alca de arrastar para reordenar itens. Uso: fila por ordem de chegada. */
export const DragHandle: FC<DragHandleProps> = memo(
  ({ label = 'Reordenar', className, ...rest }) => (
    <span
      className={['ds-drag-handle', className].filter(Boolean).join(' ')}
      role='button'
      aria-label={label}
      tabIndex={0}
      {...rest}
    >
      <DragHandleIcon size={16} />
    </span>
  ),
);

DragHandle.displayName = 'DragHandle';
export default DragHandle;
