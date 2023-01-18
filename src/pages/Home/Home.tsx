import React, { useEffect, useState } from 'react';
import { getPokemon } from '../../api/pokeapi';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import { Pokemon } from '../../types/typing';


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(0);
    const [pokemons, setPokemons] = useState([] as any);
    const itensPerPage = 20;


    const fetchPokemons = async () => {
        try {
            const data = await getPokemon(itensPerPage, itensPerPage * page);
            setPokemons(data?.pokemons);
            setTotalPages(Math.ceil(data?.count / itensPerPage));
            setLoading(false)
        } catch (error) {
            console.log('fetchPokemons error:', error)
        }
    }

    const handleBackPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const handleNextPage = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1)
        }
    }


    useEffect(() => {
        fetchPokemons();
    }, [page])

    return (
        <div>
            {
                !loading ? (
                    <div className="container">
                        <div className="pokemon-list-container">
                            {pokemons.map((pokemon: Pokemon) => {
                                return (
                                    <Card pokemon={pokemon} />
                                )
                            })}
                        </div>
                        <Pagination
                            page={page + 1}
                            totalPages={totalPages}
                            handleBackPage={handleBackPage}
                            handleNextPage={handleNextPage}
                        />
                    </div>
                ) : (<Loading />)
            }
        </div>
    )
}

export default Home;
