import image from '../../assets/gifs/no-favorites.gif'

export const COMPONENT_ID = 'pokedex-empty-state';

const EmptyState = () => {
    return (
        <div id={COMPONENT_ID} className={COMPONENT_ID}>
            <img src={image} alt="pokemon icon" className='pokedex-empty-state__icon' />
            <h1 className='pokedex-empty-state__title' >You don't have any favorites pokemon yet</h1>
        </div>
    )
}

export default EmptyState;