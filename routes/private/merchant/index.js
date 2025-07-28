const express = require("express");
const checkrole = require("../../../middleware/checkRole");
const restaurant = require("./restauranRoute");
const food = require("./foodRoute");
const router = express();

router.use(checkrole("merchant"));
router.use("/restaurant", restaurant);
router.use("/food", food);

module.exports = router;
