const joi = require("joi");

const createCategorySchema = joi.object({
  menuCategory: joi.string().min(3).max(100).required(),
  restaurantUuid: joi.string().required()
});

module.exports = { createCategorySchema };
