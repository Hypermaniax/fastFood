const { findUsernameOrEmail } = require("../../database/queries/user");
const ErrorHandler = require("../../utils/ErrorHandler");
const { loginSchema } = require("../../validators/auth.validator");
const { comparePassword } = require("../../utils/bcrypt");
const { generate } = require("../../utils/jwt");

const loginSrv = async (params) => {
  const { error } = loginSchema.validate(params);
  if (error) throw new ErrorHandler(400, error.details[0].message);

  const { usernameOrEmail, password } = params;

  const exist = await findUsernameOrEmail(usernameOrEmail);
  if (!exist) throw new ErrorHandler(404, "username or email is never exist");

  const correctPassword = await comparePassword(password, exist.password);
  if (!correctPassword) throw new ErrorHandler(400, "password is Wrong");

  delete exist.password;
  const token = generate(exist);

  return  token;
};

module.exports = loginSrv;
