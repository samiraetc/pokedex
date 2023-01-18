import image from '../../assets/gifs/loading_gif.gif'

export const COMPONENT_ID = 'pokedex-loading';

const Loading = () => {
    return (
        <div id={COMPONENT_ID}>
            <img src={image} alt="pokebola icon" className='loading' />
        </div>
    )
}

export default Loading;