const express = require("express");
const readAllRestaurant = require("../../controller/public/readAllRestaurantCtl");
const getAllFoodById = require("../../controller/public/getAllFoodByIdCtl");
const readCtl = require("../../controller/private/menuCategory/readCtl");

const router = express();

router.get("/", readAllRestaurant);
router.get("/:id/food",readCtl);

module.exports = router;
