import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { Pokemon } from '../../types/typing';
import { getFavoritesPokemon } from '../../utils/favorites';

export const COMPONENT_ID = 'pokedex-favorite';

const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const [pokemon, setPokemon] = useState<Pokemon>([] as any);

    useEffect(() => {
        setFavorites(getFavoritesPokemon(pokemon.id));
    }, [])

    return (
        <div id={COMPONENT_ID}>
            <div className="container">
                <div className="pokemon-list-container">
                    {favorites.map((pokemon: Pokemon) => {
                        return (
                            <Card pokemon={pokemon} />
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Favorites;