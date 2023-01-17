export const getPokemon = async (limit: number = 20, offset: number = 0) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then((response) => response.json()).then(async (data) => {
                const promises = data.results.map(async (pokemon: any) => {
                    return await getPokemonData(pokemon.name);
                })
                return {count: data.count, pokemons: await Promise.all(promises)}
            });
        return await response
    } catch (error) {

    }
}

export const getPokemonData = async (pokemon: string | undefined) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
