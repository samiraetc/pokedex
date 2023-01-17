
export type PokemonProps = {
    pokemon: {
        name?: string,
        id?: number,
        abilities: [{ ability: { name: string } }
        ]
        sprites: { front_default: string; }
        types: [{ type: { name: string; } }],
        stats: [{base_stat: number, stat: {name: string}}]
        weight: number,
        height: number
    }
}