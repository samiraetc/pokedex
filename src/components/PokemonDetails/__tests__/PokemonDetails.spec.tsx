import { render, configure, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { mock } from '../../../utils/mock';
import PokemonDetails, { COMPONENT_ID } from '../PokemonDetails';

configure({
    testIdAttribute: 'id',
});


describe('[POKEMON-DETAILS]', () => {

    test('should render Pokemon Details', () => {
        const { asFragment, getAllByText, getByTestId } = render(<PokemonDetails pokemon={mock.pokemon[0]} />, {wrapper: BrowserRouter});

        expect(getAllByText('bulbasaur'));
        expect(getAllByText('#1'));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render Pokemon and click to favorite', () => {
        const { asFragment, getAllByText, getByTestId } = render(<PokemonDetails pokemon={mock.pokemon[0]} />, {wrapper: BrowserRouter});

        expect(getAllByText('bulbasaur'));
        expect(getAllByText('#1'));;
        fireEvent.click(getByTestId(`${COMPONENT_ID}__favorite`));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render Pokemon and click to remove favorite', () => {
        const { asFragment, getAllByText, getByTestId } = render(<PokemonDetails pokemon={mock.pokemon[0]} />, {wrapper: BrowserRouter});

        expect(getAllByText('bulbasaur'));
        expect(getAllByText('#1'));
        fireEvent.click(getByTestId(`${COMPONENT_ID}__favorite`));
        fireEvent.click(getByTestId(`${COMPONENT_ID}__favorite`));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});