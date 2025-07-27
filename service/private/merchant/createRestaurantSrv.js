const ErrorHandler = require("../../../utils/ErrorHandler");
const {
  createMerchantShecma,
} = require("../../../validators/merchant.validator");

const createRestaurantSrv = async (params) => {
  const { error } = createMerchantShecma.validate(params);
  if (error) throw new ErrorHandler(400, error.details[0].message);

  
};

module.exports = createRestaurantSrv;
