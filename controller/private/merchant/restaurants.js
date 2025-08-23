const createRestaurantSrv = require("../../../service/private/merchant/restaurants/createRestaurantSrv");
const readRestaurantSrv = require("../../../service/private/merchant/restaurants/readRestaurantSrv");
const readAllRestaurantSrv = require("../../../service/private/merchant/restaurants/readAllRestaurantSrv");
const softDeleteRestaurantSrv = require("../../../service/private/merchant/restaurants/softDeleteRestaurantSrv");
const updateRestaurantSrv = require("../../../service/private/merchant/restaurants/updateRestaurantSrv");

const createRestaurantCtl = async (req, res, next) => {
  try {
    await createRestaurantSrv(req.body, req.user.uuid);
    return res.status(200).json({ message: "succes make restaurant" });
  } catch (error) {
    return next(error);
  }
};

const readAllRestaurantsCtl = async (req, res, next) => {
  try {
    const readAll = await readAllRestaurantSrv(req.user.uuid);
    return res.status(200).json({
      succes: true,
      message: readAll.length === 0 ? "data not found" : "success get data",
      data: readAll,
    });
  } catch (error) {
    next(error);
  }
};

const readRestaurantCtl = async (req, res, next) => {
  try {
    const read = await readRestaurantSrv(req.params.id, req.user.uuid);

    return res.status(200).json({ succes: true, data: read });
  } catch (error) {
    next(error);
  }
};

const updateRestaurantCtl = async (req, res, next) => {
  try {
    await updateRestaurantSrv(req.body, req.params.id, req.user.uuid);
    return res
      .status(200)
      .json({ succes: true, message: "succes for update Merchant" });
  } catch (error) {
    return next(error);
  }
};

const softDeleteRestaurantCtl = async (req, res, next) => {
  try {
    const softDelete = await softDeleteRestaurantSrv(
      req.params.id,
      req.user.uuid
    );
    return res.status(200).json({
      success: true,
      message: `you have succes to delete Restaurant ${softDelete}`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRestaurantCtl,
  readAllRestaurantsCtl,
  readRestaurantCtl,
  updateRestaurantCtl,
  softDeleteRestaurantCtl,
};
