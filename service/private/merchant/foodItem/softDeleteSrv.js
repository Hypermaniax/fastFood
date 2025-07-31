const { softDelete } = require("../../../../database/queries/food");

const softDeleteFoodSrv = async (params) => {
  const result = await softDelete(params);

  return result;
};

module.exports = softDeleteFoodSrv;
