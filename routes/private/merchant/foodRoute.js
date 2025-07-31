const express = require("express");
const createFoodCtl = require("../../../controller/private/merchant/foodItem/createFoodCtl");
const readAllFoodCtl = require("../../../controller/private/merchant/foodItem/readAllFoodCtl");
const updateFoodCtl = require("../../../controller/private/merchant/foodItem/updateFoodCtl");
const readFoodCtl = require("../../../controller/private/merchant/foodItem/readFoodCtl");
const softDeleteFoodCtl = require("../../../controller/private/merchant/foodItem/softDeleteFoodCtl");

const router = express();

router.post("/:id", createFoodCtl);
router.get("/:id", readAllFoodCtl);
router.get("/:id/food", readFoodCtl);
router.delete("/:id",softDeleteFoodCtl);
router.put("/:id", updateFoodCtl);

module.exports = router;
