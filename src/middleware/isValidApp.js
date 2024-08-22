const ServerError = require('../utility/serverError');
const Var = require('../config/var');

const isValidApp = (req, res, next) => {
  const apiKey = req.headers['api-key'];

  if (!apiKey || apiKey !== Var.apiKey) throw new ServerError('UNAUTHORIZED', 'No auth-token or api-key provided in header');
  req.user = { gausalaId: apiKey };
  next();
};

module.exports = isValidApp;
