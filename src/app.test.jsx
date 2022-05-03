import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

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

  it('should navigate to the detail page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const link = await screen.findByText(/rick sanchez/i);

    userEvent.click(link);

    await waitForElementToBeRemoved(screen.getByText(/loading.../i));

    await screen.findByText('Rick Sanchez');
  })
})