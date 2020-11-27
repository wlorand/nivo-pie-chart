// testing libs
import { render, screen } from '@testing-library/react';

// child components
import App from './App';

test('renders asset categories heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Asset Categories/i);
  expect(headingElement).toBeInTheDocument();
});
