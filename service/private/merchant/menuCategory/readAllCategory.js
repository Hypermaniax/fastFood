const {
  readAllMenuCategory,
} = require("../../../../database/queries/menuCategory");

const readAllCategorySrv = async (uuid) => {
  const result = await readAllMenuCategory(uuid);

  return result;
};

module.exports = readAllCategorySrv