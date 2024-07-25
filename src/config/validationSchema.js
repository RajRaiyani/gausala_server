const Joi = require('joi');

module.exports = {
  uuid: Joi.string().guid({ version: 'uuidv4' }),
  pg: {
    code: Joi.string().pattern(/^(?!_)[a-z\d_]+$/),
  },
};
