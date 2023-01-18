import { render, configure, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Card, { COMPONENT_ID } from '../Card';

configure({
    testIdAttribute: 'id',
  });
  
describe('[LOADING]', () => {
    test('should render Loading', () => {
        const { asFragment, getByTestId, getByText } = render(<Card pokemon={{
            name: 'raticate',
            id: 20,
            abilities: [{ ability: { name: 'run-away' } }
            ],
            sprites: { front_default: 'string' },
            types: [{ type: { name: 'normal' } }],
            stats: [{ base_stat: 20, stat: { name: 'hp' } }],
            weight: 185,
            height: 7,
        }}/>, {wrapper: BrowserRouter});

        expect(getByTestId(COMPONENT_ID)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

});