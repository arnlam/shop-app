import 'whatwg-fetch';
import { render, waitFor } from '@testing-library/react';
import ListBasket from '../ListBasket';
import { Wrapper } from '../../__mocks__/utils';
import { setupServer } from 'msw/lib/node';
import { mockBasket, mockBasketFailed } from '../../__mocks__/server';
import { rest } from 'msw';
import { userId } from '../../config';

const server = setupServer(rest.get(`/dev/basket/${userId}`, mockBasket));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders votre panier', async () => {
  const { getByText } = render(<ListBasket />, { wrapper: Wrapper });
  const linkElement = getByText(/votre panier/i);
  expect(linkElement).toBeInTheDocument();
});
test('network error on Basket', async () => {
  server.use(rest.get(`/dev/basket/${userId}`, mockBasketFailed));
  const { getByRole } = render(<ListBasket />, { wrapper: Wrapper });
  await waitFor(() => expect(getByRole('button')).toBeInTheDocument());
});
