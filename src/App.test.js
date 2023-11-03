// Importing render and screen methods from testing-library/react
import { render, screen } from '@testing-library/react';

// Importing the App component to test
import App from './App';

// Test to check if "learn react" link is rendered
test('renders learn react link', () => {
  // Rendering the App component
  render(<App />);

  // Finding the element with the text "learn react" using getByText method
  const linkElement = screen.getByText(/learn react/i);

  // Expecting the link element to be present in the document
  expect(linkElement).toBeInTheDocument();
});