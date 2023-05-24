import { render, screen } from '@testing-library/react';
// import { describe, it } from 'vitest';
import Login from './Login';

describe('Login', () => {
  it('Renders Welcome', () => {
    render(<Login />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Welcome!');
  });
});