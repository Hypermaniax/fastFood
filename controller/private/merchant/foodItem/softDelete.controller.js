const softDeleteFoodSrv = require("../../../../service/private/merchant/foodItem/softDeleteSrv");

const softDeleteFoodCtl = async (req, res, next) => {
  try {
    const result = softDeleteFoodSrv(req.params.id);

    return res
      .status(200)
      .json({ succes: true, message: "succes delete food", data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = softDeleteFoodCtl;
