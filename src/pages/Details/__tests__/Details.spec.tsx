import { render, configure, waitFor, getByText } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import Details, { COMPONENT_ID } from '../Details';

configure({
    testIdAttribute: 'id',
  });
  
describe('[DETAILS]', () => {
    test('should render Details Page', async () => {
        const {asFragment, getByTestId} =  render(<Details/>);
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});