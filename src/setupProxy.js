const { createProxyMiddleware } = require('http-proxy-middleware');

const simpleRequestLogger = (proxyServer, options) => {
  proxyServer.on('proxyReq', (proxyReq, req, res) => {
    console.log(`[HPM] [${req.method}] ${req.url}`); // outputs: [HPM] GET /users
  });
};

module.exports = (app) => {
  app.use(
    '/dev',
    createProxyMiddleware({
      target: 'https://ae6p34jr9l.execute-api.eu-west-3.amazonaws.com',
      changeOrigin: true,
      plugins: [simpleRequestLogger],
    })
  );
};
