const { createMerchant } = require("../../../database/queries/merchant");
const ErrorHandler = require("../../../utils/ErrorHandler");
const {
  createMerchantShecma,
} = require("../../../validators/merchant.validator");

const createRestaurantSrv = async (body, user) => {
  const { error } = createMerchantShecma.validate(body);
  if (error) throw new ErrorHandler(400, error.details[0].message);
  const { name } = body;

  const merchant = await createMerchant(name, user.id);

  return merchant;
};

module.exports = createRestaurantSrv;
