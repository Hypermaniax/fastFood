const Joi = require("joi");

const registerSchema = Joi.object({
  role: Joi.string().required(),
  username: Joi.string().min(5).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
});

const loginSchema = Joi.object({
  usernameOrEmail: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

module.exports = { registerSchema, loginSchema };
