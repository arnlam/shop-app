// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/lib/node';
import { rest } from 'msw';
import { userId } from './config';

// const handlers = [
//   rest.get(`/dev/basket/${userId}`, async (req, res, ctx) => {
//     return res(ctx.json({ data: { products: { testid: 2 } } }));
//   }),
// ];
// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());
