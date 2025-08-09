const {
  readAllRestaurantPublic,
} = require("../../database/queries/restaurant");

const readAllRestaurantSrv = async () => {
  const result = await readAllRestaurantPublic();
  return result;
};

module.exports = readAllRestaurantSrv;
