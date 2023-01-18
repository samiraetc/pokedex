import { render, configure, fireEvent } from '@testing-library/react'
import PokemonDetails, { COMPONENT_ID } from '../PokemonDetails';

configure({
    testIdAttribute: 'id',
});


describe('[POKEMON]', () => {

    test('should render Pokemon', () => {
        const { asFragment, getByText, getAllByText, getByTestId } = render(<PokemonDetails pokemon={{
            name: 'raticate',
            id: 20,
            abilities: [{ ability: { name: 'run-away' } }
            ],
            sprites: { front_default: 'string' },
            types: [{ type: { name: 'normal' } }],
            stats: [{ base_stat: 20, stat: { name: 'hp' } }],
            weight: 185,
            height: 7,
        }} />);

        expect(getAllByText('raticate'));
        expect(getByText('#20'));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render Pokemon and click to favorite', () => {
        const { asFragment, getByText, getAllByText, getByTestId } = render(<PokemonDetails pokemon={{
            name: 'raticate',
            id: 20,
            abilities: [{ ability: { name: 'run-away' } }
            ],
            sprites: { front_default: 'string' },
            types: [{ type: { name: 'normal' } }],
            stats: [{ base_stat: 20, stat: { name: 'hp' } }],
            weight: 185,
            height: 7,
        }} />);

        expect(getAllByText('raticate'));
        fireEvent.click(getByTestId(`${COMPONENT_ID}__favorite`));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render Pokemon and click to remove favorite', () => {
        const { asFragment, getByText, getAllByText, getByTestId } = render(<PokemonDetails pokemon={{
            name: 'raticate',
            id: 20,
            abilities: [{ ability: { name: 'run-away' } }
            ],
            sprites: { front_default: 'string' },
            types: [{ type: { name: 'normal' } }],
            stats: [{ base_stat: 20, stat: { name: 'hp' } }],
            weight: 185,
            height: 7,
        }} />);

        expect(getAllByText('raticate'));
        fireEvent.click(getByTestId(`${COMPONENT_ID}__favorite`));
        fireEvent.click(getByTestId(`${COMPONENT_ID}__favorite`));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});