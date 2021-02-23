import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const testId = screen.getByTestId('app-component');
  expect(testId).toBeInTheDocument();
});
