const { readAllFood } = require("../../../../database/queries/food");

const readAllFoodSrv = async (idRestaurant) => {
  const food = await readAllFood(idRestaurant);
  return food;
};

module.exports = readAllFoodSrv;
