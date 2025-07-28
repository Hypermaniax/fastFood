const { readAllRestaurants } = require("../../../../database/queries/restaurant");

const readAllRestaurantSrv = async (idRestaurant) => {
  const merchant = await readAllRestaurants(idRestaurant);

  return merchant;
};

module.exports = readAllRestaurantSrv;
