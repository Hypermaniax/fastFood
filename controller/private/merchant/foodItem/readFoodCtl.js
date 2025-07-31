const readFoodSrv = require("../../../../service/private/merchant/foodItem/readFoodSrv");

const readFoodCtl = async (req, res, next) => {
  try {
    const result = await readFoodSrv(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = readFoodCtl;
