const pool = require("../connection");

const createUser = async (role, username, email, password, name) => {
  const stringQueries = `INSERT INTO users (role,username,email,password,name) VALUES ($1,$2,$3,$4,$5)`;
  const values = [role, username, email, password, name];

  const results = await pool.query(stringQueries, values);

  return results.rows[0];
};

const findUsernameEmailExist = async (username, email) => {
  const stringQueries = `SELECT username FROM users WHERE username=$1 OR email=$2`;
  const values = [username, email];

  const user = await pool.query(stringQueries, values);
  return user.rows[0];
};

const findUsernameOrEmail = async (username) => {
  const stringQueries = `SELECT * FROM users WHERE username=$1 OR email=$1 `;
  const values = [username];

  const user = await pool.query(stringQueries, values);
  return user.rows[0];
};

module.exports = {
  createUser,
  findUsernameEmailExist,
  findUsernameOrEmail,
};
