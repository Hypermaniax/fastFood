const jwt = require("jsonwebtoken");

const generate = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};

const verify = (token) => {
  const isVerify = jwt.verify(token, process.env.JWT_SECRET);
  return isVerify;
};

module.exports = { generate, verify };
