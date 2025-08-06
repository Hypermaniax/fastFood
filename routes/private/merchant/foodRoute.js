const express = require("express");
const createFoodCtl = require("../../../controller/private/merchant/foodItem/create.controller");
const readAllFoodCtl = require("../../../controller/private/merchant/foodItem/readAll.controller");
const updateFoodCtl = require("../../../controller/private/merchant/foodItem/update.controller");
const readFoodCtl = require("../../../controller/private/merchant/foodItem/read.controller");
const softDeleteFoodCtl = require("../../../controller/private/merchant/foodItem/softDelete.controller");

const router = express();

router.post("/:id", createFoodCtl);
router.get("/:id", readAllFoodCtl);
router.get("/:id/food", readFoodCtl);
router.delete("/:id",softDeleteFoodCtl);
router.put("/:id", updateFoodCtl);

module.exports = router;
