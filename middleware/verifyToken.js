const ErrorHandler = require("../utils/ErrorHandler");
const { verify } = require("../utils/jwt");

const verifyToken = (req, res, next) => {
  const isverify = verify(req.cookies.token);
  if (!isverify) {
    res.clearCookies("token");
    throw new ErrorHandler(401, "Unauthorized");
  }
  req.user = isverify
  next();
};

module.exports = verifyToken;
