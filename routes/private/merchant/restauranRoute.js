const express = require("express");

const createRestaurantCtl = require("../../../controller/private/merchant/restaurants/createRestaurantCtl");
const updateRestaurantCtl = require("../../../controller/private/merchant/restaurants/updateRestaurantCtl");
const readRestaurantCtl = require("../../../controller/private/merchant/restaurants/readRestaurantCtl");
const softDeleteRestaurantCtl = require("../../../controller/private/merchant/restaurants/softDeleteRestaurantCtl");
const readAllRestaurantsCtl = require("../../../controller/private/merchant/restaurants/readAllRestaurantCtl");

const router = express();


router.post("/", createRestaurantCtl);
router.get("/", readAllRestaurantsCtl);
router.get("/:id", readRestaurantCtl);
router.delete("/:id", softDeleteRestaurantCtl);
router.put("/:id", updateRestaurantCtl);

module.exports = router;
