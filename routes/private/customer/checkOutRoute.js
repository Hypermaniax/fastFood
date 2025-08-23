const express = require("express");
const checkOut = require("../../../controller/private/customer/checkOut");
const router = express();

router.post("/calculate",checkOut.calculate);

module.exports = router