const express = require("express");
const readAllRestaurant = require("../../controller/public/readAllRestaurantCtl");

const router = express();

router.get("/", readAllRestaurant);

module.exports = router;
