const express = require("express");
const food = require("../../../controller/private/merchant/menuItems");

const router = express();

router.post("/:id", food.createFoodCtl);
router.get("/:id", food.readAllFoodCtl);
router.get("/:id/food", food.readFoodCtl);
router.delete("/:id", food.softDeleteFoodCtl);
router.put("/:id", food.updateFoodCtl);

module.exports = router;
