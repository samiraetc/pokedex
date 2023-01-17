import { Link } from 'react-router-dom';
import { PokemonProps } from '../../types/typing';
import Pokemon from '../Pokemon/Pokemon';


const Card = ({ pokemon }: PokemonProps) => {
    return (
        <>
            <Link to={`/details/${pokemon.name}`} >
                <div className="card">
                    <Pokemon pokemon={pokemon} />
                </div>
            </Link>
        </>
    )
}

export default Card;