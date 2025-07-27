const express = require("express");
const createRestaurantCtl = require("../../../controller/private/merchant/createRestaurantCtl");
const updateRestaurantCtl = require("../../../controller/private/merchant/updateRestaurantCtl");
const router = express();

router.post("/", createRestaurantCtl);
// router.get("/:id");
// router.delete("/:id");
router.put("/:id", updateRestaurantCtl);

module.exports = router;
