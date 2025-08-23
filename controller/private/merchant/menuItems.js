const updateFoodSrv = require("../../../service/private/merchant/foodItem/updateFoodSrv");
const softDeleteFoodSrv = require("../../../service/private/merchant/foodItem/softDeleteSrv");
const readAllFoodSrv = require("../../../service/private/merchant/foodItem/readAllfoodSrv");
const createFoodSrv = require("../../../service/private/merchant/foodItem/createFoodSrv");
const readFoodSrv = require("../../../service/private/merchant/foodItem/readFoodSrv");

const createFoodCtl = async (req, res, next) => {
  try {
    const createFood = await createFoodSrv(req.body, req.params.id);
    return res
      .status(200)
      .json({ message: `succes create food ${createFood}` });
  } catch (error) {
    return next(error);
  }
};

const readFoodCtl = async (req, res, next) => {
  try {
    const result = await readFoodSrv(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const readAllFoodCtl = async (req, res, next) => {
  try {
    console.log(req.params.id);
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

const updateFoodCtl = async (req, res, next) => {
  try {
    const food = await updateFoodSrv(req.params.id, req.body, req.user.uuid);
    return res.status(200).json({ food });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateFoodCtl,
  createFoodCtl,
  readFoodCtl,
  readAllFoodCtl,
  softDeleteFoodCtl,
};
