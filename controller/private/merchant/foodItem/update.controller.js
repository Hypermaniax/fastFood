const updateFoodSrv = require("../../../../service/private/merchant/foodItem/updateFoodSrv");

const updateFoodCtl = async (req, res, next) => {
  try {
    const food = await updateFoodSrv(req.params.id, req.body, req.user.uuid);
    return res.status(200).json({food});
  } catch (error) {
    next(error);
  }
};

module.exports = updateFoodCtl;
