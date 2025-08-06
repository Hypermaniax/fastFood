const jwt = require("jsonwebtoken");
const ErrorHandler = require("./ErrorHandler");

const generate = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
  return token;
};

const verify = (token) => {
  if(!token) throw new ErrorHandler(400,'Unauthorized')
  const isVerify = jwt.verify(token, process.env.JWT_SECRET);
  return isVerify;
};

module.exports = { generate, verify };
