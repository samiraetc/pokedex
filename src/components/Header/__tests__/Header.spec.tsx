import { render, configure } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Header, { COMPONENT_ID } from '../Header';

configure({
    testIdAttribute: 'id',
  });
  
describe('[HEADER]', () => {
    test('should render Header', () => {
        const { asFragment, getByText, getByTestId } = render(<Header />, {wrapper: BrowserRouter});

        expect(getByText('Home'));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});