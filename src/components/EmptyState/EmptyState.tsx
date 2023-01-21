import image from '../../assets/gifs/no-favorites.gif'
import { EmptyStateMessage } from './EmptyStateMessages';

export const COMPONENT_ID = 'pokedex-empty-state';

const EmptyState = () => {
    const wordings = EmptyStateMessage;
    return (
        <div id={COMPONENT_ID} className={COMPONENT_ID}>
            <img src={image} alt="pokemon icon" className='pokedex-empty-state__icon' />
            <h1 className='pokedex-empty-state__title' >{wordings.EMPTY_STATE_MESSAGE}</h1>
        </div>
    )
}

export default EmptyState;