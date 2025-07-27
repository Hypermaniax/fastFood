const jwt = require("jsonwebtoken");

const generate = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
  return token;
};

const verify = (token) => {
  const isVerify = jwt.verify(token, process.env.JWT_SECRET);
  return isVerify;
};

module.exports = { generate, verify };
