import { render, configure, fireEvent } from '@testing-library/react'
import Pokemon, { COMPONENT_ID } from '../Pokemon';

configure({
    testIdAttribute: 'id',
});


describe('[POKEMON]', () => {
    test('should render Pokemon', () => {
        const { asFragment, getByText, getByTestId } = render(<Pokemon pokemon={{
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

        expect(getByText('raticate'));
        expect(getByText('#20'));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});