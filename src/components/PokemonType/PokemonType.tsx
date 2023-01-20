import { Pokemon } from "../../types/typing";
import { pokemonTypeColors } from "../../utils/pokemon-type-colors";

export const COMPONENT_ID = 'pokemon-details-type';

interface PokemonTypeProps {
    type: string,
}

const PokemonType = ({type}: PokemonTypeProps) => {
    return <p id={COMPONENT_ID} className={`${COMPONENT_ID}__item`} style={{ backgroundColor: pokemonTypeColors[type] }}>{type}</p>
}

export default PokemonType;