import { useState } from 'react';
import { Pokemon } from '../../types/typing';
import { removeFavoritePokemon, saveFavoritesPokemon, verifyIfIsFavorited } from '../../utils/favorites';
import Pokemons from '../Pokemon/Pokemon';
import ProgressBar from '../ProgressBar/ProgressBar';
import { MdOutlineCatchingPokemon, MdCatchingPokemon } from "react-icons/md";
import PokemonType from '../PokemonType/PokemonType';
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const COMPONENT_ID = 'pokedex-pokemon-details'

interface PokemonDetailsProps {
    pokemon: Pokemon
}

const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
    const [areInFavorite, setAreInFavorite] = useState(verifyIfIsFavorited(pokemon.id))

    const handleClickToFavorite = () => {
        areInFavorite ? (
            removeFavoritePokemon(pokemon.id),
            setAreInFavorite(verifyIfIsFavorited(pokemon.id))
        ) : (
            saveFavoritesPokemon(pokemon),
            setAreInFavorite(verifyIfIsFavorited(pokemon.id)));
    }

    return (
        <div className="pokemon-details-container" id={COMPONENT_ID}>
            <div className='pokemon-details-card'>
                <Link to={`/`} >
                    <FiArrowLeft size={30} color="#373E59" />
                </Link>
                <div className='pokemon-details-favorite'>
                    <p className='pokemon-details-name'>{pokemon.name}</p>
                    <div onClick={() => handleClickToFavorite()} id={`${COMPONENT_ID}__favorite`}>
                        {areInFavorite ? (<MdCatchingPokemon size={30} color="#C22E28" />) : (<MdOutlineCatchingPokemon size={30} color="#373E59" />)}

                    </div>
                </div>

                <div className='pokemon-details-about'>

                    <div>
                        <Pokemons pokemon={pokemon} />
                        <div className="pokemon-details-type">
                            Types:
                            {pokemon.types.map((types: any, index: number) => {
                                const type = types.type.name;
                                return <PokemonType type={type} key={index} />
                            })}
                        </div>

                        <div className="pokemon-details-abilities">
                            Abilities:
                            {pokemon.abilities.map((value: any, index: number) => {
                                return <p key={index} className="pokemon-details-abilities__item">{value.ability.name}</p>
                            })}
                        </div>
                    </div>
                    <div className="pokemon-details-stats">
                        {pokemon.stats.map((value: any) => {
                            return (
                                <div key={pokemon.id} className='pokemon-details-stats__item'>
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