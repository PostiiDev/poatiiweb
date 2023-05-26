const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (env) => {
  return {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        middlewares.push(
          createProxyMiddleware('/api', {
            target: "http://localhost:5000",
            changeOrigin: true,
          })
        );
        return middlewares;
      },
    },
  };
};
