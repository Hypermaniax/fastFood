const { getAllFoodByIdGlobal } = require("../../database/queries/food");

const getAllFoodByIdSrv = async (uuid) => {
  const result = await getAllFoodByIdGlobal(uuid);
    console.log(result)
  return result;
};

module.exports = getAllFoodByIdSrv