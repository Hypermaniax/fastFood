const express = require("express");
const restaurant = require("./readRestaurantPublic");
const getAllFoodById = require("../../controller/public/getAllFoodByIdCtl");
const router = express();

router.use("/restaurant", restaurant);
router.use("/restaurant/:id/food",getAllFoodById);

module.exports = router;
