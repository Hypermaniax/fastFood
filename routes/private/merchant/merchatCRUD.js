const express = require("express");
const createRestaurantCtl = require("../../../controller/private/merchant/createRestaurantCtl");
const updateRestaurantCtl = require("../../../controller/private/merchant/updateRestaurantCtl");
const readRestaurantCtl = require("../../../controller/private/merchant/readRestaurantCtl");
const softDeleteRestaurantCtl = require("../../../controller/private/merchant/softDeleteRestaurantCtl");
const router = express();

router.post("/", createRestaurantCtl);
router.get("/:id", readRestaurantCtl);
router.delete("/:id", softDeleteRestaurantCtl);
router.put("/:id", updateRestaurantCtl);

module.exports = router;
