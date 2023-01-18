import { render, configure, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Pagination, { COMPONENT_ID } from '../Pagination';

configure({
    testIdAttribute: 'id',
  });
  
describe('[PAGINATION]', () => {
    const Mock = jest.fn();
    test('should render Pagination', () => {
        const { asFragment, getByText, getByTestId } = render(<Pagination handleBackPage={Mock} handleNextPage={Mock}  page={1} totalPages={10}/>);

        expect(getByText('1 of 10'));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});