const Joi = require('joi');

module.exports = {

  login: {
    body: Joi.object().keys({
      phoneNumber: Joi.string().min(10).max(10).required(),
      password: Joi.string().required(),
    }),
  },

};
