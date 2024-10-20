const Joi = require('joi');

module.exports = {

  list: {
    query: Joi.object().keys({
      date: Joi.date(),
    }),
  },
  create: {
    body: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      date: Joi.date().required(),
    }),
  },
  update: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),

    body: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      date: Joi.date().required(),
    }),
  },

  delete: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

};
