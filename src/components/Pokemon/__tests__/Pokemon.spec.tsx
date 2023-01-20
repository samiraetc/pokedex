import { render, configure, fireEvent } from '@testing-library/react'
import { mock } from '../../../utils/mock';
import Pokemon, { COMPONENT_ID } from '../Pokemon';

configure({
    testIdAttribute: 'id',
});


describe('[POKEMON]', () => {
    test('should render Pokemon', () => {
        const { asFragment, getByText, getByTestId } = render(<Pokemon pokemon={mock.pokemon[0]} />);

        expect(getByText('bulbasaur'));
        expect(getByText('#1'));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});