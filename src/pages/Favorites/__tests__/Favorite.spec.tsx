import { render, configure, waitFor, getByText } from '@testing-library/react'
import Favorites, { COMPONENT_ID } from '../Favorites';

configure({
    testIdAttribute: 'id',
  });
  
describe('[FAVORITES]', () => {
    test('should render Favorites Page', async () => {
        const {asFragment, getByTestId, getByText} =  render(<Favorites/>);

        waitFor(() => {
            expect(getByText('bulbasaur'));
        })
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render Favorites Page and click to got to next page', async () => {
        const {asFragment, getByTestId, getByText} =  render(<Favorites/>);

        waitFor(() => {
            expect(getByText('bulbasaur'));
            expect(getByTestId('pokedex-pagination-next')).toBeInTheDocument();
        })

        expect(asFragment()).toMatchSnapshot();
    });

});