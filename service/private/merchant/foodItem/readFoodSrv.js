const { readFood } = require("../../../../database/queries/food");

const readFoodSrv = async (params) => {
  const reslut = await readFood(params);

  return reslut;
};

module.exports = readFoodSrv;
