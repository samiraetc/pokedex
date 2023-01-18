import { useState } from 'react';
import { PokemonProps } from '../../types/typing';
import { removeFavoritePokemon, saveFavoritesPokemon, verifyIfIsFavorited } from '../../utils/favorites';
import Pokemon from '../Pokemon/Pokemon';
import ProgressBar from '../ProgressBar/ProgressBar';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import PokemonType from '../PokemonType/PokemonType';


const PokemonDetails = ({ pokemon }: PokemonProps) => {
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
        <div className="pokemon-details-container">
            <div className='pokemon-details-card'>
                <div className='pokemon-details-favorite'>
                    <p className='pokemon-details-name'>{pokemon.name}</p>
                    <div onClick={() => handleClickToFavorite()}>
                        {areInFavorite ? (<FaHeart size={30} color="#C22E28" />) : (<FaRegHeart size={30} color="#373E59" />)}
                    </div>
                </div>
                <div className='pokemon-details-about'>

                    <div>
                        <Pokemon pokemon={pokemon} />
                        <div className="pokemon-details-type">
                            Types:
                            {pokemon.types.map((types: any) => {
                                const type = types.type.name;
                                return <PokemonType type={type} />
                            })}
                        </div>

                        <div className="pokemon-details-abilities">
                            Abilities:
                            {pokemon.abilities.map((value: any) => {
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