import React from 'react';
import { PokemonProps } from '../../types/typing';
import Pokemon from '../Pokemon/Pokemon';
import ProgressBar from '../ProgressBar/ProgressBar';
import { pokemonTypeColors } from '../utils/pokemon-type-colors';

const PokemonDetails = ({ pokemon }: PokemonProps) => {

    console.log(pokemon)
    return (
        <div className="pokemon-details-container">
            <div className='pokemon-details-card'>
                <p className='pokemon-details-name'>{pokemon.name}</p>
                <div className='pokemon-details-about'>

                    <div>
                        <Pokemon pokemon={pokemon} />
                        <div className="pokemon-details-type">
                            Types:
                            {pokemon.types.map((types: any) => {
                                const type = types.type.name;
                                return <p className="pokemon-details-type__item" style={{ backgroundColor: pokemonTypeColors[type] }}>{type}</p>
                            })}
                        </div>

                        <div className="pokemon-details-abilities">
                            Abilities:
                            {pokemon.abilities.map((value: any) => {
                                console.log(value.ability.name);
                                return <p className="pokemon-details-abilities__item">{value.ability.name}</p>
                            })}
                        </div>
                    </div>
                    <div className="pokemon-details-stats">
                        {pokemon.stats.map((value: any) => {
                            return (
                                <div className='pokemon-details-stats__item'>
                                    {value.stat.name}
                                    <ProgressBar key={pokemon.id} completed={value.base_stat} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PokemonDetails;