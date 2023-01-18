import { render, configure, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import ProgressBar, { COMPONENT_ID } from '../ProgressBar';

configure({
    testIdAttribute: 'id',
  });
  
describe('[PROGRESSBAR]', () => {
    test('should render ProgressBar', () => {
        const { asFragment, getByText, getByTestId } = render(<ProgressBar completed={80}/>);

        expect(getByText('80'));
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});