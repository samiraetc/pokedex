import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import EmptyState from '../../components/EmptyState/EmptyState';
import Loading from '../../components/Loading/Loading';
import { Pokemon } from '../../types/typing';
import { getFavoritesPokemon } from '../../utils/favorites';

export const COMPONENT_ID = 'pokedex-favorite';

const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const [pokemon, setPokemon] = useState<Pokemon>([] as any);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setFavorites(getFavoritesPokemon(pokemon.id));

        setInterval(() => {
            setLoading(false);
          }, 1500);
    }, [])

    return (
        <div id={COMPONENT_ID}>


            {
                !loading ? (
                    <div className="container">
                    <div className="pokemon-list-container">
                        {favorites.length > 0 ? (
                            favorites.map((pokemon: Pokemon) => {
                                return (
                                    <Card pokemon={pokemon} />
                                )
                            })
                        ) : (<EmptyState />)}
                    </div>
    
                </div>
                ) : (<Loading />)
            }
        </div>
    )
}

export default Favorites;