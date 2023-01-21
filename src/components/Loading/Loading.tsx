import image from '../../assets/gifs/loading.gif'

export const COMPONENT_ID = 'pokedex-loading';

const Loading = () => {
    return (
        <div id={COMPONENT_ID} className={COMPONENT_ID}>
            <img src={image} alt="pokebola icon" className='pokedex-loading__icon' />
        </div>
    )
}

export default Loading;