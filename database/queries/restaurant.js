const pool = require("../connection");

const createRestaurants = async (name, id) => {
  const stringQueries = `INSERT INTO restaurants (name,user_id) VALUES ($1,$2) RETURNING *`;
  const values = [name, id];

  const Restaurants = await pool.query(stringQueries, values);

  return Restaurants.rows[0];
};

const readRestaurants = async (idRestaurant, idUser) => {
  const stringQueries = `SELECT * FROM restaurants WHERE uuid=$1 AND user_id=$2 AND deleted_at IS NULL LIMIT 1`;
  const values = [idRestaurant, idUser];

  const Restaurants = await pool.query(stringQueries, values);
  return Restaurants.rows[0];
};

const softDeleteRestaurants = async (idRestaurant, idUser) => {
  const stringQueries = `UPDATE restaurants SET deleted_at=now() WHERE uuid=$1 AND user_id=$2 RETURNING name`;
  const values = [idRestaurant, idUser];

  const Restaurants = await pool.query(stringQueries, values);
  return Restaurants.rows[0];
};

const readAllRestaurants = async (idRestaurant) => {
  const stringQueries = `SELECT name,uuid FROM restaurants WHERE user_id=$1 AND deleted_at IS null`;
  const values = [idRestaurant];

  const Restaurants = await pool.query(stringQueries, values);

  return Restaurants.rows;
};

const updateRestaurants = async (data, idRestaurant, idUser) => {
  const fields = Object.keys(data);
  const safeFields = fields
    .map((value, key) => `${value} = $${key + 1}`)
    .join(", ");
  const values = Object.values(data);
  values.push(idRestaurant, idUser);

  const stringQueries = `UPDATE restaurants SET ${safeFields} ,updated_at=now() WHERE uuid=$${
    fields.length + 1
  } AND user_id = $${fields.length + 2} `;

  const Restaurants = await pool.query(stringQueries, values);

  return Restaurants.rowCount;
};

const readAllRestaurantPublic = async () => {
  const stringQueries = `SELECT uuid,name,is_open,rating,address FROM restaurants`;

  const restaurant = await pool.query(stringQueries);
  return restaurant.rows;
};

module.exports = {
  createRestaurants,
  updateRestaurants,
  readRestaurants,
  softDeleteRestaurants,
  readAllRestaurants,
  readAllRestaurantPublic,
};
