const express = require("express");
const auth = require("./auth/authRoute");
const secret = require("./private/index");
const verifyToken = require("../middleware/verifyToken");
const router = express();

router.use("/auth", auth);
router.use("/secret",verifyToken, secret);

module.exports = router;
