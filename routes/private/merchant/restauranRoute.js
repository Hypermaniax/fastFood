const express = require("express");
const restaurants = require("../../../controller/private/merchant/restaurants");
const router = express();

router.post("/", restaurants.createRestaurantCtl);
router.get("/", restaurants.readAllRestaurantsCtl);
router.get("/:id", restaurants.readRestaurantCtl);
router.delete("/:id", restaurants.softDeleteRestaurantCtl);
router.put("/:id", restaurants.updateRestaurantCtl);

module.exports = router;
