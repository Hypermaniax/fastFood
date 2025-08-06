const createFoodSrv = require("../../../../service/private/merchant/foodItem/createFoodSrv");

const createFoodCtl = async (req, res, next) => {
  try {
    const createFood = await createFoodSrv(req.body, req.params.id);
    return res.status(200).json({message : `succes create food ${createFood.name}` });
  } catch (error) {
    return next(error);
  }
};

module.exports = createFoodCtl;
