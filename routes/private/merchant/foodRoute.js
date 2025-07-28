const express = require("express");
const createFoodCtl = require("../../../controller/private/merchant/foodItem/createFoodCtl");

const router = express();

router.post("/:id", createFoodCtl);
// router.get("/:id");
// router.get("/");
// router.delete("/:id");
// router.put('/:id')

module.exports = router;
