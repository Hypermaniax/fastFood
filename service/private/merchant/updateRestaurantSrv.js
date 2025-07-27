const { updateMerchant } = require("../../../database/queries/merchant");
const ErrorHandler = require("../../../utils/ErrorHandler");
const {
  updateMerchantSchema,
} = require("../../../validators/merchant.validator");

const updateRestaurantSrv = async (data, idRestaurant, idUser) => {
  const { error } = updateMerchantSchema.validate(data);
  if (error) throw new ErrorHandler(400, error.details[0].message);
  const { addres, description, open_time, close_time } = data;

  const update = await updateMerchant(
    data,
    idRestaurant,
    idUser
  );
  if(update === 0) throw new ErrorHandler(400,'You dont have that Merchant')
  return update;
};

module.exports = updateRestaurantSrv;
