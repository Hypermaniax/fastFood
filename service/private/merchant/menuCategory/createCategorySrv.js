const {
  createMenuCategory,
} = require("../../../../database/queries/menuCategory");
const ErrorHandler = require("../../../../utils/ErrorHandler");
const { createCategorySchema } = require("../../../../validators/menuCategory");

const createCategorySrv = async (params) => {
  const { error } = createCategorySchema.validate(params);
  if (error) throw new ErrorHandler(401, error.details[0].message);

  const { restaurantUuid, menuCategory } = params;

  const result = await createMenuCategory(restaurantUuid, menuCategory);

  return result;
};

module.exports = createCategorySrv;
