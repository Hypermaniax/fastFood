const pool = require("../connection");

const readPaymentMethod = async () => {
  const stringQueries = `SELECT * FROM payment_method`;

  const result = await pool.query(stringQueries);

  return result.rows;
};

module.exports = { readPaymentMethod };
