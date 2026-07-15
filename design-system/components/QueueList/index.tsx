import { FC, KeyboardEvent, PointerEvent as ReactPointerEvent, memo, useRef } from 'react';
import { DragHandle } from '../DragHandle';
import { QueueItem } from '../QueueItem';
import { TrackMetaProps } from '../TrackMeta';
import { VoteControl } from '../VoteControl';
import './styles.css';

export interface QueueTrack extends TrackMetaProps {
  /** Identificador estavel da faixa na fila. */
  id: string;
  /** Saldo de votos (modo votacao). */
  votes?: number;
  /** Voto da pessoa atual (modo votacao). */
  userVote?: 'up' | 'down' | null;
}

export interface QueueListProps {
  /**
   * votacao: ordem definida pelo grupo, com VoteControl.
   * chegada: ordem de chegada, com DragHandle.
   */
  mode: 'votacao' | 'chegada';
  /** Faixas na ordem de exibicao. */
  items: QueueTrack[];
  /** Destaca a contagem do primeiro item (modo votacao). Padrao: true. */
  highlightFirst?: boolean;
  onUpvote?: (id: string) => void;
  onDownvote?: (id: string) => void;
  /** Chamado ao soltar um item em nova posicao (modo chegada). */
  onReorder?: (fromIndex: number, toIndex: number) => void;
  className?: string;
}

/**
 * Lista ordenada da fila da sessao, nos modos votacao e ordem de chegada.
 * No modo chegada, a reordenacao acontece arrastando pela alca (pointer events,
 * mouse e toque) ou com as setas para cima/baixo com a alca focada.
 */
export const QueueList: FC<QueueListProps> = memo(
  ({ mode, items, highlightFirst = true, onUpvote, onDownvote, onReorder, className }) => {
    const listRef = useRef<HTMLOListElement>(null);

    /** Arrasto com pointer events: move o item, desloca os vizinhos e solta na nova posicao. */
    const iniciarArrasto = (from: number) => (e: ReactPointerEvent<HTMLSpanElement>) => {
      if (!onReorder || e.button === 2) return;
      const list = listRef.current;
      if (!list) return;
      e.preventDefault();

      const els = Array.from(list.children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement,
      );
      const total = els.length;
      const altura = els[from].getBoundingClientRect().height;
      const inicioY = e.clientY;
      const arrastado = els[from];
      let to = from;

      arrastado.classList.add('ds-queue-item--dragging');
      list.classList.add('ds-queue-list--dragging');

      const aoMover = (ev: PointerEvent) => {
        const delta = ev.clientY - inicioY;
        arrastado.style.transform = 'translateY(' + delta + 'px)';
        const alvo = Math.min(total - 1, Math.max(0, from + Math.round(delta / altura)));
        if (alvo !== to) {
          to = alvo;
          els.forEach((el, i) => {
            if (el === arrastado) return;
            let desloca = 0;
            if (from < to && i > from && i <= to) desloca = -altura;
            if (from > to && i >= to && i < from) desloca = altura;
            el.style.transform = desloca ? 'translateY(' + desloca + 'px)' : '';
          });
        }
      };

      const aoSoltar = () => {
        window.removeEventListener('pointermove', aoMover);
        window.removeEventListener('pointerup', aoSoltar);
        window.removeEventListener('pointercancel', aoSoltar);
        els.forEach((el) => {
          el.style.transform = '';
          el.classList.remove('ds-queue-item--dragging');
        });
        list.classList.remove('ds-queue-list--dragging');
        if (to !== from) onReorder(from, to);
      };

      window.addEventListener('pointermove', aoMover);
      window.addEventListener('pointerup', aoSoltar);
      window.addEventListener('pointercancel', aoSoltar);
    };

    /** Acessibilidade: setas para cima/baixo movem o item com a alca focada. */
    const aoTeclar = (index: number) => (e: KeyboardEvent<HTMLSpanElement>) => {
      if (!onReorder) return;
      if (e.key === 'ArrowUp' && index > 0) {
        e.preventDefault();
        onReorder(index, index - 1);
      }
      if (e.key === 'ArrowDown' && index < items.length - 1) {
        e.preventDefault();
        onReorder(index, index + 1);
      }
    };

    return (
      <ol ref={listRef} className={['ds-queue-list', className].filter(Boolean).join(' ')}>
        {items.map((item, index) => {
          const { id, votes = 0, userVote, ...track } = item;
          return (
            <QueueItem
              key={id}
              position={index + 1}
              track={track}
              trailing={
                mode === 'votacao' ? (
                  <VoteControl
                    votes={votes}
                    userVote={userVote}
                    highlighted={highlightFirst && index === 0}
                    onUpvote={onUpvote ? () => onUpvote(id) : undefined}
                    onDownvote={onDownvote ? () => onDownvote(id) : undefined}
                  />
                ) : (
                  <DragHandle
                    onPointerDown={onReorder ? iniciarArrasto(index) : undefined}
                    onKeyDown={onReorder ? aoTeclar(index) : undefined}
                  />
                )
              }
            />
          );
        })}
      </ol>
    );
  },
);

QueueList.displayName = 'QueueList';
export default QueueList;
