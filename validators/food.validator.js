const Joi = require("joi");

const createFoodShecma = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().optional(),
  price: Joi.number().required(),
  image_url: Joi.string().optional(),
  category: Joi.array().required(),
});

const updateFoodSchema = Joi.object({
  name: Joi.string().min(3).max(100),
  description: Joi.string(),
  price: Joi.number(),
  image_url: Joi.string(),
  category: Joi.array(),
}).min(1);

module.exports = { createFoodShecma, updateFoodSchema };
