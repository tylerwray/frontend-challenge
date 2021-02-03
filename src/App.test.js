import { render, screen } from './test-utils';

import App from './App';

test('shows the top 5 movies on the home page', async () => {
  render(<App />);
  await screen.findByText('Outside the Wire');
  screen.getByText('Skylines');
  screen.getByText('Wonder Woman 1984');
  screen.getByText('Soul');
  screen.getByText('Ava');
});
