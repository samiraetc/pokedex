import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getPokemonData } from '../../api/pokeapi';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';

const Details = () => {
    const {id} = useParams();
    const [pokemons, setPokemons] = useState([] as any);
    const [loading, setLoading] = useState(true);


    const fetchPokemons = async () => {
        try {
            const data = await getPokemonData(id);
            setPokemons(data);
            setLoading(false);
        } catch (error) {
            console.log('fetchPokemons error:', error)
        }
    }

    useEffect(() => {
        fetchPokemons();
      }, [])


    return (
        <h1>
          { !loading ? (<PokemonDetails pokemon={pokemons} />) : (<Loading />)}
        </h1>
    )
}

export default Details;