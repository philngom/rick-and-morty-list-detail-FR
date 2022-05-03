import Characters from './Characters';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('characters', () => {
  it('should render a list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const loading = screen.getByText(/loading.../i);

    await waitForElementToBeRemoved(loading);

    await screen.findAllByRole('listitem');
  })
})