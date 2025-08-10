const pool = require("../connection");

const createMenuCategory = async (restaurantUuid, menuCategory) => {
  const stringQueries = `INSERT INTO menu_category (restaurant_uuid,menu_category) VALUES ($1,$2)`;

  const values = [restaurantUuid, menuCategory];

  const result = await pool.query(stringQueries, values);

  return result.rowCount;
};

module.exports = { createMenuCategory };