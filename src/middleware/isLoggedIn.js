const jwt = require('jsonwebtoken');
const ServerError = require('../utility/serverError');
const Var = require('../config/var');

const isLoggedIn = (req, res, next) => {
  const token = req.headers['auth-token'];
  const apiKey = req.headers['api-key'];

  if (!token || !apiKey || apiKey !== Var.apiKey) throw new ServerError('UNAUTHORIZED', 'No auth-token or api-key provided in header');

  jwt.verify(token, Var.jwtSecret, (err, payload) => {
    if (err) throw new ServerError('UNAUTHORIZED', 'Failed to authenticate token');
    req.user = payload;
    next();
  });
};

module.exports = isLoggedIn;
