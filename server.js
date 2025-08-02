const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
require("dotenv").config();

const router = require("./routes/route");
const apiError = require("./middleware/apiError");
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use("/api", router);
app.use(apiError);
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
