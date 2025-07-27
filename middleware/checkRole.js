const ErrorHandler = require("../utils/ErrorHandler");

const checkrole = (role) => {
  return (req, res, next) => {
    const user = req.user;
    if (user.role !== role)
      throw new ErrorHandler(400, `${role} is needed for your action`);

    next();
  };
};
module.exports = checkrole;
