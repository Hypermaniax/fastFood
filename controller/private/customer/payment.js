const readPaymentMethodSrv = require("../../../service/private/costumer/paymentMethod/readPaymentMethodSrv");

const readPayment = async (req, res, next) => {
  try {
    const result = await readPaymentMethodSrv();
    return res.status(200).json({ data: result });
  } catch (error) {
    return next(error);
  }
};

module.exports = {readPayment};
