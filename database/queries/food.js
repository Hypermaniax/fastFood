const pool = require("../connection");

const createFood = async (body, uuid) => {
  const fields = Object.keys(body).join(", ");
  const fieldValues = Object.keys(body)
    .map((_, i) => `$${i + 1}`)
    .join(", ");
  const values = Object.values(body);
  const stringQueries = `
  INSERT INTO food_items (${fields}, restaurant_id) VALUES (${fieldValues},$${
    values.length + 1
  }) returning * `;
  values.push(uuid);
  console.log(stringQueries)
  const food = await pool.query(stringQueries, values);
  console.log(food)
  return food.rows[0];
};

module.exports = { createFood };
