import 'whatwg-fetch';
import { renderHook, waitFor } from '@testing-library/react';
import { useBasket } from '../useBasket';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { setupServer } from 'msw/lib/node';
import { mockBasket } from '../../__mocks__/server';
import { rest } from 'msw';
import { userId } from '../../config';
import { Wrapper } from '../../__mocks__/utils';

const server = setupServer(rest.get(`/dev/basket/${userId}`, mockBasket));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('get Basket products', async () => {
  const { result } = renderHook(() => useBasket(), { wrapper: Wrapper });
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.data).toEqual({ testid: 2 });
});
