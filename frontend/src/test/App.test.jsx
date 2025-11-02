import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.jsx';
   // <-- important

describe('App smoke test', () => {
  it('renders something visible', () => {
    render(<App />);
    expect(screen.getByText(/recipe app/i)).toBeInTheDocument();
  });
});
