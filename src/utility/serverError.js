const { errorCodes } = require('../config/constant');

class ServerError extends Error {
  constructor(code, message) {
    if (!code) throw new Error('Error code is required in ServerError');

    super();
    this.name = 'ServerError';
    this.code = code;
    this.message = message;
  }

  info() {
    const errorObj = errorCodes.server[this.code];

    if (!errorObj) return { httpStatusCode: 500, body: { message: 'internal server error' } };

    return {
      httpStatusCode: errorObj.httpStatusCode,
      body: {
        code: errorObj.body.code,
        message: this.message || errorObj.body.message,
      },
    };
  }
}

module.exports = ServerError;
