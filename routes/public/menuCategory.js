const express = require("express");
const category = require("../../controller/private/merchant/menuCategory");

const router = express();

router.get("/:id",category.readCtl);

module.exports = router;
