const pool = require("../connection");
const ErrorHandler = require("../../utils/ErrorHandler");

const createFood = async (body, uuid) => {
  const client = await pool.connect();
  try {
    client.query("BEGIN");
    const { category, ...foodData } = body;

    const keys = [Object.keys(foodData).join(", "), "restaurant_id"];
    const values = [...Object.values(foodData), uuid];
    const field = values.map((_, i) => `$${i + 1}`).join(", ");

    const stringQueriesFood = `
    INSERT INTO food_items (${keys}) VALUES (${field}) RETURNING *
    `;

    const result = await client.query(stringQueriesFood, values);

    for (const categories of category) {
      await client.query(
        `
        INSERT INTO food_categories (food_item_id,category_id) VALUES ($1,$2) 
        `,
        [result.rows[0].uuid, categories]
      );
    }

    await client.query("COMMIT");
    return result.rows[0];
  } catch (error) {
    await client.query(`ROLLBACK`);
  } finally {
    client.release();
  }
};

const readAllFood = async (idRestaurant) => {
  const stringQueries = `
  SELECT
       fi.name AS menu,fi.description,fi.price,fi.image_url,string_agg(cs.name,', ') AS categories,fi.uuid
  FROM
       food_items fi 
       JOIN food_categories fc ON fc.food_item_id = fi.uuid
       JOIN categories cs ON cs.uuid = fc.category_id
       WHERE fi.restaurant_id = $1
  GROUP BY
        fi.name,fi.description,fi.price,fi.image_url,fi.uuid

  `;

  const values = [idRestaurant];

  const result = await pool.query(stringQueries, values);
  return result.rows;
};

const updateFood = async (body, uuid, idUser) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const { category, ...foodData } = body;
    const keys = [...Object.keys(foodData)].map(
      (item, index) => `${item}=$${index + 1}`
    );
    const values = [...Object.values(foodData)];

    values.push(uuid);

    const stringQueriesUpdateFood = `
    UPDATE food_items SET ${keys}  WHERE uuid = $${values.length} RETURNING *`;

    const resultUpdateFood = await client.query(
      stringQueriesUpdateFood,
      values
    );

    if (resultUpdateFood.rows.length === 0) {
      throw new ErrorHandler(404, { message: "food item not found" });
    }

    await client.query(`DELETE FROM food_categories WHERE food_item_id = $1`, [
      uuid,
    ]);

    for (const categories of category) {
      await client.query(
        `INSERT INTO food_categories (food_item_id,category_id) VALUES ($1,$2)`,
        [uuid, categories]
      );
    }

    await client.query("COMMIT");

    return resultUpdateFood.rows[0];
    
  } catch (error) {
    await client.query("ROLLBACK");
    throw new ErrorHandler(401, error);
  } finally {
    client.release();
  }
};

module.exports = { createFood, readAllFood, updateFood };
