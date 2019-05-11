const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
  app.use(proxy('/auth/github', { target: 'http://localhost:5000' }));
  app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
  app.use(proxy('/api/posts/*', { target: 'http://localhost:5000' }));
  app.use(proxy('/api/posts/username/*', { target: 'http://localhost:5000' }));
};
