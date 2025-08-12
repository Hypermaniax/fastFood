const pool = require("../connection");

const createMenuCategory = async (restaurantUuid, menuCategory) => {
  const stringQueries = `INSERT INTO menu_category (restaurant_uuid,name_category) VALUES ($1,$2)`;

  const values = [restaurantUuid, menuCategory];

  const result = await pool.query(stringQueries, values);

  return result.rowCount;
};

const readAllMenuCategory = async (uuid) => {
  const stringQueries = `
WITH
    category_with_menu AS (
        SELECT mc.restaurant_uuid, mc.name_category, COALESCE(
                json_agg(
                    json_build_object(
                        'uuid', mi.uuid, 'name', mi.name, 'description', mi.description, 'price', mi.price, 'image_url', mi.image_url, 'is_available', mi.is_available
                    )
                ), '[]'::json
            ) AS menu_list
FROM
    menu_category mc
    LEFT JOIN menu_item mi ON mi.menu_category_uuid = mc.uuid
    WHERE mc.restaurant_uuid = $1
GROUP BY
    mc.restaurant_uuid,
    mc.name_category
)
SELECT rs.name AS resto, rs.description, COALESCE(
        json_agg(
            json_build_object(
                'category', cwm.name_category,
                'menu_list', cwm.menu_list
            )
        ), '[]'::json
    ) AS menu
FROM restaurants rs
    LEFT JOIN category_with_menu cwm ON cwm.restaurant_uuid = rs.uuid
    WHERE rs.uuid = $1
GROUP BY
    rs.name,
    rs.description`;

  const values = [uuid];
  const result = await pool.query(stringQueries, values);

  return result.rows;
};

module.exports = { createMenuCategory, readAllMenuCategory };
