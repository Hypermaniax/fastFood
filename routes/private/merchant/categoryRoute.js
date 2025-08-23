const express = require("express");
const category = require("../../../controller/private/merchant/menuCategory");
const router = express();

router.post("/", category.createCategoryCtl);
router.get("/:id", category.readCtl);

module.exports = router;
