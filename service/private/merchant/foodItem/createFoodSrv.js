const { createFood } = require("../../../../database/queries/food");
const ErrorHandler = require("../../../../utils/ErrorHandler");
const { createFoodShecma } = require("../../../../validators/food.validator");

const createFoodSrv = async (body, uuid) => {
  const { error } = createFoodShecma.validate(body);
  if (error) throw new ErrorHandler(401, error.details[0].message);
  const food = await createFood(body, uuid);
  return food;
};
module.exports = createFoodSrv;
