const pool = require("../connection");

const createMerchant = async (name, id) => {
  const stringQueries = `INSERT INTO restaurants (name,user_id) VALUES ($1,$2) RETURNING *`;
  const values = [name, id];

  const merchant = await pool.query(stringQueries, values);

  return merchant.rows[0];
};

const readMerchant = async (idRestaurant, idUser) => {
  const stringQueries = `SELECT * FROM restaurants WHERE id=$1 AND user_id=$2 AND delete_at=null LIMIT 1`;
  const values = [idRestaurant, idUser];

  const merchant = await pool.query(stringQueries, values);
  return merchant.rows[0];
};

const softDeleteMerchant = async (idRestaurant, idUser) => {
  const stringQueries = `UPDATE restaurants SET delete_at=now() WHERE id=$1 AND user_id=$2 RETURNING name`;
  const values = [idRestaurant, idUser];

  const merchant = await pool.query(stringQueries, values);
  return merchant.rows[0];
};

const updateMerchant = async (data, idRestaurant, idUser) => {
  const fields = Object.keys(data);
  const safeFields = fields
    .map((value, key) => `${value} = $${key + 1}`)
    .join(", ");
  const values = Object.values(data);
  values.push(idRestaurant, idUser);

  const stringQueries = `UPDATE restaurants SET ${safeFields} ,updated_at=now() WHERE id=$${
    fields.length + 1
  } AND user_id = $${fields.length + 2} `;

  const merchant = await pool.query(stringQueries, values);

  return merchant.rowCount;
};

module.exports = {
  createMerchant,
  updateMerchant,
  readMerchant,
  softDeleteMerchant,
};
