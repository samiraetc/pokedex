import { Link } from 'react-router-dom';
import { Pokemon, PokemonProps } from '../../types/typing';
import { mock } from '../../utils/mock';
import Pokemons from '../Pokemon/Pokemon';

export const COMPONENT_ID = 'pokedex-card'

interface CardProps {
    pokemon: Pokemon
}

const Card = ({ pokemon }: CardProps) => {
    return (
        <div id={COMPONENT_ID}>
            <Link to={`/details/${pokemon.id}`} >
                <div className="card">
                    <Pokemons pokemon={pokemon} />
                </div>
            </Link>
        </div>
    )
}

export default Card;