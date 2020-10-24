const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/api/auth/', '/api/bookroom/', 'api/rooms'],
    createProxyMiddleware({
      target: 'https://still-mesa-76438.herokuapp.com',
      changeOrigin: true,
    })
  );
};
