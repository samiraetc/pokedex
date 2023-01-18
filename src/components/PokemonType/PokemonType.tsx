import { pokemonTypeColors } from "../../utils/pokemon-type-colors";


export type PokemonTypeProps = {
    type: string,
}

const PokemonType = ({type}: PokemonTypeProps) => {
    return <p className="pokemon-details-type__item" style={{ backgroundColor: pokemonTypeColors[type] }}>{type}</p>
}

export default PokemonType;