const express = require("express");
const restaurant = require("./readRestaurantPublic");
const menuCategory = require('./menuCategory')
const router = express();

router.use("/restaurant", restaurant);
router.use("/food", menuCategory);


module.exports = router;
