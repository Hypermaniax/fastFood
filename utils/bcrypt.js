const bcrypt = require("bcrypt");

const saltRound = 10;

const hashPassword = async (password) => {
  const hashing = await bcrypt.hash(password, saltRound);

  return hashing;
};

const comparePassword = async (passwordCurrent, passwordHash) => {
  const compare = await bcrypt.compare(passwordCurrent, passwordHash);
  return compare
};

module.exports = { hashPassword, comparePassword };
