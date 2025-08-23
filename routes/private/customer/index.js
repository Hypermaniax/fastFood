const express = require("express");
const checkrole = require("../../../middleware/checkRole");
const paymentMethod = require('./paymentMethodRoute')
const checkOut = require('./checkOutRoute')
const router = express();

router.use(checkrole("customer"));
router.use("/payment-method",paymentMethod);
router.use('/check-out',checkOut)

module.exports = router;