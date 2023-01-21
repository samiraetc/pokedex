import { render, configure, fireEvent } from '@testing-library/react'
import EmptyState, { COMPONENT_ID } from '../EmptyState';
import { EmptyStateMessage } from '../EmptyStateMessages';

configure({
    testIdAttribute: 'id',
  });
  
describe('[EMPTY-STATE]', () => {
    const wordings = EmptyStateMessage;
    test('should render Empty State', () => {
        const { asFragment, getByTestId, getByText} = render(<EmptyState />);

        expect(getByText(wordings.EMPTY_STATE_MESSAGE))
        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});