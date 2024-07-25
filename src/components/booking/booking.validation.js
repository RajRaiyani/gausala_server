const Joi = require('joi');

module.exports = {

  create: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      phoneNumber: Joi.string().required().min(10).max(10),
      date: Joi.date().min(new Date().setHours(0, 0, 0, 0)).required(),
    }),
  },

  update: {
    body: Joi.object().keys({
      name: Joi.string(),
      phoneNumber: Joi.string().min(10).max(10),
      date: Joi.date().required(),
    }),
  },

  delete: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

};
