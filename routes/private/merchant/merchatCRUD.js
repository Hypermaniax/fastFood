const express = require("express");
const createRestaurantCtl = require("../../../controller/private/merchant/createRestaurantCtl");
const router = express();

router.post("/", createRestaurantCtl);
// router.get("/:id");
// router.delete("/:id");
// router.put("/:id");

module.exports = router;
