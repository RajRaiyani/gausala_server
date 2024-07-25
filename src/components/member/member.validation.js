const Joi = require('joi');

module.exports = {

  create: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      phoneNumber: Joi.string().required().min(10).max(10),
      birthDate: Joi.date().required(),
      address: Joi.string().required(),
    }),
  },

  update: {
    body: Joi.object().keys({
      name: Joi.string(),
      phoneNumber: Joi.string().min(10).max(10),
      birthDate: Joi.date(),
      address: Joi.string(),
    }),
  },

  delete: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

};
