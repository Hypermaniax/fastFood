const { readMerchant } = require("../../../database/queries/merchant");
const ErrorHandler = require("../../../utils/ErrorHandler");

const readRestaurantSrv = async (idRestaurant, idUser) => {
  const merchant = await readMerchant(idRestaurant, idUser);

  if (merchant.length === 0)
    throw new ErrorHandler(401, { message: "Your dont have data" });
  return merchant;
};
module.exports = readRestaurantSrv;
