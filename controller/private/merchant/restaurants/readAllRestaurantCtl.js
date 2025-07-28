const readAllRestaurantSrv = require("../../../../service/private/merchant/restaurants/readAllRestaurantSrv");

const readAllRestaurantsCtl = async (req, res, next) => {
  try {
    const readAll = await readAllRestaurantSrv(req.user.uuid);
    return res
      .status(200)
      .json({
        succes: true,
        message: readAll.length === 0 ? "data not found" : "success get data",
        data: readAll,
      });
  } catch (error) {
    next(error);
  }
};

module.exports = readAllRestaurantsCtl;
