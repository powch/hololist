const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/talent', { target: 'http://localhost:3001/' }));
}