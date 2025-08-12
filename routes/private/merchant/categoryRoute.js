const express = require("express");
const createCategoryCtl = require("../../../controller/private/menuCategory/createCtl");
const readCtl = require("../../../controller/private/menuCategory/readCtl");

const router = express();

router.post("/", createCategoryCtl);
router.get("/:id", readCtl);

module.exports = router;
