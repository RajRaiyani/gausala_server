const Joi = require('joi');

module.exports = {

  delete: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

};
