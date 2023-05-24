import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import AppProvider from './Context/context';

describe('App', () => {
  it('Renders welcome to dashboard', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppProvider>
          <App />
        </AppProvider>
      </MemoryRouter>
    );

    const heading2 = document.querySelector('.welcome');
    expect(heading2?.textContent).toBe('Welcome to the dashboard');
  });
});