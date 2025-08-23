const calculateSrv = require("../../../service/private/costumer/checkOut/calculateCheckOut");

const calculate = (req, res, next) => {
  try {
    const result = calculateSrv(req.body.price);
    return res.status(200).json({ message: "calculate", data: result });
  } catch (error) {
    return next(error);
  }
};

module.exports = { calculate };
