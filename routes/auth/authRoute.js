const express = require("express");
const registerCtl = require("../../controller/auth/registerCtl");
const loginCtl = require("../../controller/auth/loginCtl");

const router = express();

router.post("/login", loginCtl);
router.post("/register", registerCtl);

module.exports = router;
