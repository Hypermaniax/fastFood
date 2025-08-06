const express = require("express");
const registerCtl = require("../../controller/auth/register.controller");
const loginCtl = require("../../controller/auth/login.controller");
const getMeCtl = require("../../controller/auth/getMe.controller");
const verifyToken = require("../../middleware/verifyToken");

const router = express();

router.post("/login", loginCtl);
router.post("/register", registerCtl);
router.get("/me",verifyToken, getMeCtl);

module.exports = router;
