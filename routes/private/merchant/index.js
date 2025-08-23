const express = require("express");
const checkrole = require("../../../middleware/checkRole");
const restaurant = require("./restauranRoute");
const category = require("./categoryRoute");
const food = require("./menuItems");
const router = express();

router.use(checkrole("merchant"));
router.use("/restaurant", restaurant);
router.use("/category", category);
router.use("/food", food);

module.exports = router;
