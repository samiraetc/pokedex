import {FC} from 'react';
import { Pokemon } from '../../types/typing';

export const COMPONENT_ID = 'pokedex-pokemon'

interface PokemonsProp {
    pokemon: Pokemon
}

const Pokemons = ({ pokemon }: PokemonsProp) => {

    const calculateWeightAndHeight = (value: number) => {
        return value / 10;
    }
    return (
        <div className="pokemon" id={COMPONENT_ID} key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-avatar" />
            <div className='pokemon__infos'>
                <p className="pokemon__name">{pokemon.name}</p>
                <p className="pokemon__number">#{pokemon.id}</p>
            </div>
            <div className="pokemon__infos">
                <p>{calculateWeightAndHeight(pokemon.weight)} kg</p>
                <p>{calculateWeightAndHeight(pokemon.height)} m</p>
            </div>
        </div>
    )
}

export default Pokemons;