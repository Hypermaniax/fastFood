const express = require("express");
const merchantCRUD = require("../private/merchant/merchatCRUD");
const checkrole = require("../../middleware/checkRole");
const router = express();

router.use("/merchant", checkrole("merchant"), merchantCRUD);

module.exports = router;
