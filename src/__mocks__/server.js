export const mockBasket = (req, res, ctx) => {
  return res(ctx.json({ data: { products: { testid: 2 } } }));
};

export const mockBasketFailed = (req, res, ctx) => {
  return res(
    ctx.status(403),
    ctx.json({
      error: { message: 'forbidden' },
    })
  );
};
