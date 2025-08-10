const express = require("express");
const createCategoryCtl = require("../../../controller/private/menuCategory/createCategoryCtl");

const router = express();

router.post("/", createCategoryCtl);

module.exports = router;
