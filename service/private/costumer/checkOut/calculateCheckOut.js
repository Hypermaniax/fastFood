const ErrorHandler = require("../../../../utils/ErrorHandler");
const {
  calculateShecma,
} = require("../../../../validators/checkOut.validator");

const calculateSrv = (price) => {
  const { error } = calculateShecma.validate({ price });
  if (error) throw new ErrorHandler(401, error.details[0].message);

  const serviceFee = 1500;
  const appFee = 1500;

  const fee = {
    serviceFee,
    appFee,
    calculate: serviceFee + appFee + price,
  };

  return fee;
};

module.exports = calculateSrv;
