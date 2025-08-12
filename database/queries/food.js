const pool = require("../connection");
const ErrorHandler = require("../../utils/ErrorHandler");

const createFood = async (body, uuid) => {
  const keys = Object.keys(body).join(", ");
  const placeHolder = [...Object.values(body), uuid]
    .map((_, index) => `$${index + 1}`)
    .join(", ");

  const stringQueries = `
  INSERT INTO menu_item (${keys}, menu_category_uuid) VALUES (${placeHolder})
  `;

  const values = [...Object.values(body), uuid];
  const result = await pool.query(stringQueries, values);

  return result;
};

const readAllFood = async (idRestaurant) => {
  const stringQueries = `
  SELECT
      mi.name,
      mi.description,
      mi.price,
      mi.image_url,
      mi.is_available,
      mc.menu_category
  FROM
      menu_item mi
      JOIN menu_category mc ON mc.uuid = mi.menu_category_uuid
  WHERE
      mc.uuid = $1

  `;

  const values = [idRestaurant];

  const result = await pool.query(stringQueries, values);
  console.log(result.rows)
  return result.rows;
};

const readFood = async (params) => {
  const stringQueries = `
  SELECT
   fi.name, fi.description, cs.name AS categories
  FROM
    food_items fi
    JOIN food_categories fc ON fc.food_item_id = fi.uuid
    JOIN categories cs ON cs.uuid = fc.category_id
  WHERE
    fi.uuid = $1
  `;

  const value = [params];

  const result = await pool.query(stringQueries, value);
  return result.rows[0];
};

const softDelete = async (params) => {
  const stringQueries = `
  UPDATE food_items SET deleted_at = NOW() WHERE food_items.uuid = $1 
  `;
  const values = [params];

  const result = await pool.query(stringQueries, values);

  return result.rowCount;
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
    UPDATE food_items SET ${keys}  WHERE uuid = $${values.length} RETURNING *
    `;

    const resultUpdateFood = await client.query(
      stringQueriesUpdateFood,
      values
    );

    if (resultUpdateFood.rows.length === 0) {
      throw new ErrorHandler(500, { message: "food item not found" });
    }

    if (!category || category.length >= 1) {
      await client.query(
        `DELETE FROM food_categories WHERE food_item_id = $1`,
        [uuid]
      );
      for (const categories of category) {
        await client.query(
          `INSERT INTO food_categories (food_item_id,category_id) VALUES ($1,$2)`,
          [uuid, categories]
        );
      }
    }

    await client.query("COMMIT");

    return resultUpdateFood.rows[0];
  } catch (error) {
    await client.query("ROLLBACK");
    throw new ErrorHandler(500, { message: error.message });
  } finally {
    client.release();
  }
};

const getAllFoodByIdGlobal = async (uuid) => {
  const stringQueries = `SELECT fi.name, fi.description , fi.is_available, fi.uuid FROM  food_items fi where restaurant_id =$1`;

  const values = [uuid];
  const result = await pool.query(stringQueries, values);

  return result.rows;
};

module.exports = {
  createFood,
  readAllFood,
  updateFood,
  readFood,
  softDelete,
  getAllFoodByIdGlobal,
};
