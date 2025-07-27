const { object } = require("joi");
const pool = require("../connection");

const createMerchant = async (name, id) => {
  const stringQueries = `INSERT INTO restaurants (name,user_id) VALUES ($1,$2)`;
  const values = [name, id];

  const merchant = await pool.query(stringQueries, values);

  return merchant.rows[0];
};

const listMerchant = async (userId) => {
  const stringQueries = `SELECT name FROM restaurants WHERE user_id=$1`;
  const values = [userId];

  const merchant = await pool.query(stringQueries, values);

  return merchant.rows;
};

const updateMerchant = async (data, idRestaurant, idUser) => {
  const fields = Object.keys(data);
  const safeFields = fields
    .map((value, key) => `${value} = $${key + 1}`)
    .join(", ");
  const values = Object.values(data);
  values.push(idRestaurant, idUser);

  const stringQueries = `UPDATE restaurants SET ${safeFields} WHERE id=$${
    fields.length + 1
  } AND user_id = $${fields.length + 2} `;

  const merchant = await pool.query(stringQueries, values);

  return merchant.rowCount;
};

module.exports = { createMerchant, listMerchant, updateMerchant };
