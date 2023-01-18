import { render, configure, waitFor, getByText } from '@testing-library/react';
import { mock } from '../utils/mock';
import { getPokemon } from './pokeapi';


describe('[POKEAPI]', () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve(
            {json: Promise.resolve(mock)}
        )
    }) as jest.Mock;

    test('Pokeapi render', async () => {

        const user = await getPokemon(3, 0);
        expect(global.fetch).toBeCalledTimes(1);
        expect(global.fetch).toBeCalledWith('https://pokeapi.co/api/v2/pokemon?offset=0&limit=3');
        await expect(user).toEqual(mock);
    });


});