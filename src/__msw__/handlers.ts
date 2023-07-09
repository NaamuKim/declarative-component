import { rest } from 'msw';

export const handlers = [
  rest.get('/banner', (_, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get('/sections', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: Array.from({ length: 10 }, () => ({
          img: 'https://images.unsplash.com/photo-1687467110633-8e90cecd042b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        })),
      })
    );
  }),
  rest.get('/section2', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: Array.from({ length: 10 }, () => ({
          img: 'https://images.unsplash.com/photo-1687467110633-8e90cecd042b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        })),
      })
    );
  }),
];