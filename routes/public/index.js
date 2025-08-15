const express = require("express");
const restaurant = require("./readRestaurantPublic");
const router = express();

router.use("/restaurant", restaurant);

module.exports = router;
