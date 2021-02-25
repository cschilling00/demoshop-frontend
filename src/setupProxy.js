const {createProxyMiddleware}  = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/productservice',
        createProxyMiddleware({
            target: 'http://localhost:8080/graphql',
            changeOrigin: true,
        })
    );

    app.use(
        '/usermanagement',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            changeOrigin: true,
            pathRewrite: {'/usermanagement':'graphql'}

        })
    );

}
