const { readAllMerchant } = require("../../../../database/queries/merchant");

const readAllRestaurantSrv = async (idRestaurant) => {
  const merchant = await readAllMerchant(idRestaurant);

  return merchant;
};

module.exports = readAllRestaurantSrv;
