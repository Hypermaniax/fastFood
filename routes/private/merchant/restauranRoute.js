const express = require("express");

const createRestaurantCtl = require("../../../controller/private/merchant/restaurants/createRestaurant.controller");
const updateRestaurantCtl = require("../../../controller/private/merchant/restaurants/updateRestaurant.controller");
const readRestaurantCtl = require("../../../controller/private/merchant/restaurants/readRestaurant.controller");
const softDeleteRestaurantCtl = require("../../../controller/private/merchant/restaurants/softDeleteRestaurant.controller");
const readAllRestaurantsCtl = require("../../../controller/private/merchant/restaurants/readAllRestaurant.controller");

const router = express();


router.post("/", createRestaurantCtl);
router.get("/", readAllRestaurantsCtl);
router.get("/:id", readRestaurantCtl);
router.delete("/:id", softDeleteRestaurantCtl);
router.put("/:id", updateRestaurantCtl);

module.exports = router;
