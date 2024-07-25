const Joi = require('joi');

module.exports = {

  create: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      amount: Joi.number().required(),
      phoneNumber: Joi.string().required().min(10).max(10),
      address: Joi.string().required().allow(''),
      date: Joi.date().required(),
    }),
  },

  update: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      amount: Joi.number().required(),
      phoneNumber: Joi.string().required().min(10).max(10),
      address: Joi.string().required().allow(''),
      date: Joi.date().required(),
    }),
  },

  delete: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

};