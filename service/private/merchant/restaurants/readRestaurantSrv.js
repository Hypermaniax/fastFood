const { readRestaurants } = require("../../../../database/queries/restaurant");
const ErrorHandler = require("../../../../utils/ErrorHandler");

const readRestaurantSrv = async (idRestaurant, idUser) => {
  const merchant = await readRestaurants(idRestaurant, idUser);

  if (!merchant)
    throw new ErrorHandler(401, { message: "Your dont have data" });
  return merchant;
};
module.exports = readRestaurantSrv;
