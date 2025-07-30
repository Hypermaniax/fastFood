const { updateFood } = require("../../../../database/queries/food");
const ErrorHandler = require("../../../../utils/ErrorHandler");
const { updateFoodSchema } = require("../../../../validators/food.validator");

const updateFoodSrv = async (idFood, body, idUser) => {
  const { error } = updateFoodSchema.validate(body);
  if (error) throw new ErrorHandler(401, error.details[0].message);

  const food = await updateFood(body, idFood, idUser);

  return food;
};

module.exports = updateFoodSrv;
