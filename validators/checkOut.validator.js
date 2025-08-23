const Joi = require("joi");

const calculateShecma = Joi.object({
  price : Joi.number().strict().required()
});

module.exports = { calculateShecma };
