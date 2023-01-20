import { render, configure, waitFor, getByText } from '@testing-library/react';
import { mock } from '../utils/mock';
import { getPokemon } from './pokeapi';


global.fetch = jest.fn(async () => {
    return await Promise.resolve({
        json: () => Promise.resolve(mock)
    })
}) as jest.Mock;

describe('[POKEAPI]', () => {

    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
      });


    test('Pokeapi render', async () => {

        const user = await getPokemon(1, 0);

        expect(global.fetch).toBeCalledTimes(1);
        expect(global.fetch).toBeCalledWith('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1');
    });


});