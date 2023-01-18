import React from 'react';
import { PokemonProps } from '../../types/typing';

export const COMPONENT_ID = 'pokedex-pokemon'

const Pokemon = ({ pokemon }: PokemonProps) => {
    return (
            <div className="pokemon" id={COMPONENT_ID}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-avatar" />
                <div className='pokemon__infos'>
                    <p className="pokemon__name">{pokemon.name}</p>
                    <p className="pokemon__number">#{pokemon.id}</p>
                </div>
                <div className="pokemon__infos">
                    <p>{pokemon.weight / 10} kg</p>
                    <p>{pokemon.height / 10} m</p>
                </div>
            </div>
    )
}

export default Pokemon;