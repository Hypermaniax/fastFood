const express = require("express");
const createFoodCtl = require("../../../controller/private/merchant/foodItem/createFoodCtl");
const readAllFoodCtl = require("../../../controller/private/merchant/foodItem/readAllFoodCtl");

const router = express();

router.post("/:id", createFoodCtl);
router.get("/:id", readAllFoodCtl);
// router.get("/");
// router.delete("/:id");
// router.put('/:id')

module.exports = router;
