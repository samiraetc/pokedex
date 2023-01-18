import { render, configure, waitFor, getByText } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import Home, { COMPONENT_ID } from '../Home';

configure({
    testIdAttribute: 'id',
  });
  
describe('[HOME]', () => {
    test('should render Home Page', async () => {
        const {asFragment, getByTestId, getByText} =  render(<Home/>);

        waitFor(() => {
            expect(getByText('bulbasaur'));
        })
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render Home Page and click to got to next page', async () => {
        const {asFragment, getByTestId, getByText} =  render(<Home/>);

        waitFor(() => {
            expect(getByText('bulbasaur'));
            expect(getByTestId('pokedex-pagination-next')).toBeInTheDocument();
        })

        expect(asFragment()).toMatchSnapshot();
    });

});