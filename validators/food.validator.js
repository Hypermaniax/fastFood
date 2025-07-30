const Joi = require("joi");

const createFoodShecma = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().optional(),
  price: Joi.number().required(),
  image_url: Joi.string().optional(),
  category:Joi.array().required()
});

module.exports = { createFoodShecma };
