const Joi = require('joi');
const { create } = require('./image.dal');

module.exports = {

  create: {
    body: Joi.object().keys({
      description: Joi.string().required(),
    }),
  },
  delete: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

};
