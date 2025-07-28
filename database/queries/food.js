const pool = require("../connection");

const createFood = async (body, uuid) => {
  const fields = [...Object.keys(body), "restaurant_id"];
  const values = [...Object.values(body), uuid];
  const fieldValues = fields.map((_, i) => `$${i + 1}`).join(", ");

  const stringQueries = `
  INSERT INTO food_items (${fields.join(
    ", "
  )}) VALUES (${fieldValues}) returning * `;
  
  const food = await pool.query(stringQueries, values);

  return food.rows[0];
};

module.exports = { createFood };
