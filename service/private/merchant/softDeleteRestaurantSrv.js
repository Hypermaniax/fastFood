const { softDeleteMerchant } = require("../../../database/queries/merchant");
const ErrorHandler = require("../../../utils/ErrorHandler");

const softDeleteRestaurantSrv = async (idRestaurant, idUser) => {
    const merchant =  await softDeleteMerchant(idRestaurant, idUser)
    if(!merchant) throw new ErrorHandler(401, { message: "Delete is unsuccess" })
    return merchant
};

module.exports = softDeleteRestaurantSrv;
