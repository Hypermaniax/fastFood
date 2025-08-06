const {
  createUser,
  findUsernameEmailExist,
} = require("../../database/queries/user");
const { hashPassword } = require("../../utils/bcrypt");
const ErrorHandler = require("../../utils/ErrorHandler");
const { registerSchema } = require("../../validators/auth.validator");

const registerSrv = async (params) => {
  const { error } = registerSchema.validate(params);
  if (error) throw new ErrorHandler(400, error.details[0].message);

  const { role, username, email, password, name } = params;

  const exist = await findUsernameEmailExist(username, email);
  if (exist) throw new ErrorHandler(409, "Email or username already taken");

  const hash = await hashPassword(password);
  const user = await createUser(role, username, email, hash, name);

  return user;
};

module.exports = registerSrv;
