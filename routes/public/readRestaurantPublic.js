const express = require("express");
const restaurant = require("../../controller/public/restaurants");

const router = express();

router.get("/", restaurant.readAllRestaurant);

module.exports = router;
