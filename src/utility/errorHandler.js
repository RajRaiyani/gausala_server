const expressValidation = require('express-validation');
const ServerError = require('./serverError');
const Logger = require('../lib/logger');
const { errorCodes } = require('../config/constant');

const convertValidationError = (err) => {
  const errors = [];
  Object.keys(err.details).forEach((location) => {
    err.details[location].forEach((e) => { errors.push({ location, messages: [e.message], field: e.path[0] }); });
  });
  return {
    httpStatusCode: err.statusCode,
    body: { code: 'validation_error', message: 'parameters are not valid', errors },
  };
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    const validationErrorObj = convertValidationError(err);
    Logger.warn({ message: 'ValidationError', stack: JSON.stringify(validationErrorObj.body.errors) });
    return res.status(validationErrorObj.httpStatusCode).json(validationErrorObj.body);
  }

  if (err instanceof ServerError) {
    const errorInfo = err.info();
    if (errorInfo) return res.status(errorInfo.httpStatusCode).json(errorInfo.body);
  }

  if (err.code) {
    const errorInfo = errorCodes.postgres[err.code];
    if (errorInfo) return res.status(errorInfo.httpStatusCode).json(errorInfo.body);
  }

  // TODO : remove when improve logging
  console.log(err);

  return res.status(500).json({ message: 'internal server error' });
};

module.exports = errorHandler;
