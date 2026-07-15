import { FC, memo } from 'react';
import { Avatar } from '../Avatar';
import { ExplicitTag } from '../Badge';
import './styles.css';

export interface AddedBy {
  name: string;
  avatarUrl?: string;
  /** true exibe "voce adicionou" no lugar do nome. */
  isYou?: boolean;
}

export interface TrackMetaProps {
  /** URL da capa do album (40x40). */
  coverUrl: string;
  /** Titulo da faixa. Truncado em uma linha. */
  title: string;
  /** Artistas ja formatados ("Charlie Puth, Selena Gomez"). */
  artists: string;
  /** Selo E de conteudo explicito. */
  explicit?: boolean;
  /** true pinta o titulo de verde (faixa em reproducao). */
  highlighted?: boolean;
  /** Quem adicionou a faixa. Exibido sob os artistas com avatar xs. */
  addedBy?: AddedBy;
  className?: string;
}

/** Bloco capa + titulo + artistas + procedencia. Base das linhas de fila e do tocando agora. */
export const TrackMeta: FC<TrackMetaProps> = memo(
  ({ coverUrl, title, artists, explicit, highlighted, addedBy, className }) => (
    <div className={['ds-track-meta', className].filter(Boolean).join(' ')}>
      <img className='ds-track-meta__cover' src={coverUrl} alt={'Capa de ' + title} />
      <div className='ds-track-meta__text'>
        <p
          className={
            'ds-track-meta__title' + (highlighted ? ' ds-track-meta__title--highlighted' : '')
          }
        >
          {title}
        </p>
        <p className='ds-track-meta__artists'>
          {explicit && <ExplicitTag />}
          {artists}
        </p>
        {addedBy && (
          <span className='ds-track-meta__added-by'>
            <Avatar src={addedBy.avatarUrl} name={addedBy.name} size='xs' />
            {addedBy.isYou ? 'você adicionou' : addedBy.name}
          </span>
        )}
      </div>
    </div>
  ),
);

TrackMeta.displayName = 'TrackMeta';
export default TrackMeta;
