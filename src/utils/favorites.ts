import { Pokemon } from "../types/typing";

let favorites;

export const saveFavoritesPokemon = (pokemon: Pokemon) => {
    const favorites = getFavoritesPokemon(pokemon.id);
    favorites.push(pokemon);
    localStorage.setItem('favorites', JSON.stringify(favorites))
}


export const getFavoritesPokemon = (id: number) => {
    localStorage.getItem('favorites') === null ? favorites = [] : favorites = JSON.parse(localStorage.getItem('favorites') as string)
    const result = favorites.filter((word: Pokemon) => word.id != id);
    return result;
}

export const verifyIfIsFavorited = (id: number) => {
    localStorage.getItem('favorites') === null ? favorites = [] : favorites = JSON.parse(localStorage.getItem('favorites') as string)
    const result = favorites.filter((value: Pokemon) =>  value.id === id);
    return result.length === 1;
}

export const removeFavoritePokemon = (id: number) => {
    localStorage.getItem('favorites') === null ? favorites = [] : favorites = JSON.parse(localStorage.getItem('favorites') as string)
    favorites = favorites.filter((value: Pokemon) =>  value.id !== id);
    return localStorage.setItem('favorites', JSON.stringify(favorites))
}
