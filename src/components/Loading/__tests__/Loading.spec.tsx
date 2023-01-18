import { render, configure, fireEvent } from '@testing-library/react'
import Loading, { COMPONENT_ID } from '../Loading';

configure({
    testIdAttribute: 'id',
  });
  
describe('[LOADING]', () => {
    test('should render Loading', () => {
        const { asFragment, getByTestId } = render(<Loading />);

        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});