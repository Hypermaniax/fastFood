const { readPaymentMethod } = require("../../../../database/queries/paymentMethod");

const readPaymentMethodSrv = async () => {
    const paymentMethod = await readPaymentMethod()
    
    return paymentMethod
};

module.exports = readPaymentMethodSrv;
