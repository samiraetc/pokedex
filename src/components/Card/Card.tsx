import { Link } from 'react-router-dom';
import { PokemonProps } from '../../types/typing';
import Pokemon from '../Pokemon/Pokemon';

export const COMPONENT_ID = 'pokedex-card'


const Card = ({ pokemon }: PokemonProps) => {
    return (
        <div id={COMPONENT_ID}>
            <Link to={`/details/${pokemon.name}`} >
                <div className="card">
                    <Pokemon pokemon={pokemon} />
                </div>
            </Link>
        </div>
    )
}

export default Card;