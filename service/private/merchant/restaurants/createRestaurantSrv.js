const { createRestaurants } = require("../../../../database/queries/restaurant");
const ErrorHandler = require("../../../../utils/ErrorHandler");
const {
  createRestaurantsShecma,
} = require("../../../../validators/restaurant.validator");

const createRestaurantSrv = async (body, idUser) => {
  const { error } = createRestaurantsShecma.validate(body);
  if (error) throw new ErrorHandler(400, error.details[0].message);
  const { name } = body;

  const merchant = await createRestaurants(name, idUser);

  return merchant;
};

module.exports = createRestaurantSrv;
