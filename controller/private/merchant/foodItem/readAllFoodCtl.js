const readAllFoodSrv = require("../../../../service/private/merchant/foodItem/readAllfoodSrv");

const readAllFoodCtl = async (req, res, next) => {
  try {
    const readAllFood = await readAllFoodSrv(req.params.id);
    return res.status(200).json({
      succes: true,
      message: readAllFood.length === 0 ? "data not found" : "success get data",
      data: readAllFood,
    });
  } catch (error) {
    next(error);
  }
};

module.exports =readAllFoodCtl
