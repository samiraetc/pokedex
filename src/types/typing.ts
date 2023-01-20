
export type PokemonProps = {
    count?: number,
    pokemon: Pokemon[]
}

export type Pokemon = {
    name: string,
    id: number,
    abilities: { ability: { name: string; }; }[],
    sprites: { front_default: string; }
    types: { type: { name: string; }; }[],
    stats: {base_stat: number, stat: {name: string}}[],
    weight: number,
    height: number,
}
