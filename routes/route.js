const express = require("express");
const auth = require("./auth/authRoute");
const secret = require("./private/merchant/index");
const public = require("./public/index");
const verifyToken = require("../middleware/verifyToken");
const router = express();

router.use("/", public);
router.use("/auth", auth);
router.use("/merchant", verifyToken, secret);
module.exports = router;
