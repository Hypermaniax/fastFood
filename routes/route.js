const express = require("express");
const auth = require("./auth/authRoute");
const merchant = require("./private/merchant/index");
const public = require("./public/index");
const customer = require('./private/customer/index')
const verifyToken = require("../middleware/verifyToken");
const router = express();

router.use("/", public);
router.use("/auth", auth);
router.use('/customer',verifyToken,customer)
router.use("/merchant", verifyToken, merchant);

module.exports = router;
