const express = require("express");
const verifyToken = require("../../middleware/verifyToken");

const auth = require("../../controller/auth/authCtl");

const router = express();

router.post("/login", auth.loginCtl);
router.post("/register", auth.registerCtl);
router.get("/me", verifyToken, auth.getMeCtl);

module.exports = router;
