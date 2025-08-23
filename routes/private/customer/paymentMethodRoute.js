const express = require("express");
const paymentMethod = require("../../../controller/private/customer/payment");
const router = express();

router.get("/", paymentMethod.readPayment);

module.exports = router;
