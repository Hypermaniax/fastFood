const express = require("express");
const restaurant = require("../private/merchant/restauranRoute");
const checkrole = require("../../middleware/checkRole");
const router = express();

router.use("/restaurant", checkrole("merchant"), restaurant);

module.exports = router;
