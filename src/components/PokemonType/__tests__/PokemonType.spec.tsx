import { render, configure } from '@testing-library/react'
import PokemonType, { COMPONENT_ID } from '../PokemonType';

configure({
    testIdAttribute: 'id',
  });
  
describe('[POKEMONTYPE]', () => {
    test('should render PokemonType', () => {
        const { asFragment, getByText, getByTestId } = render(<PokemonType type={'normal'} />);

        expect(getByText('normal'));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});