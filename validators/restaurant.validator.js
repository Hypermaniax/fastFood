const Joi = require("joi");

const createRestaurantsShecma = Joi.object({
  name: Joi.string().required().min(5),
});

const updateRestaurantsSchema = Joi.object({
  name: Joi.string(),
  address: Joi.string(),
  description: Joi.string(),
  open_time: Joi.string()
    .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    ,
  close_time: Joi.string()
    .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    ,
}).or("address", "description", "open_time", "close_time",'name');

module.exports = { createRestaurantsShecma, updateRestaurantsSchema };
