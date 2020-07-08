const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        ['/api', '/api/auth/login'],
        createProxyMiddleware({
            target: "http://localhost:4000",
        })
    );
};
