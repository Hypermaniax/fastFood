const readAllRestaurantSrv = require("../../service/public/readAllRestaurantSrv");

const readAllRestaurant = async (req, res, next) => {
  try {
    const result = await readAllRestaurantSrv(req.query);
    return res
      .status(200)
      .json({ success: true, message: "get data restaurant", data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {readAllRestaurant};
