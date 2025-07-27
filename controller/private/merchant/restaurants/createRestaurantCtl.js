const createRestaurantSrv = require("../../../../service/private/merchant/restaurants/createRestaurantSrv");

const createRestaurantCtl = async (req, res, next) => {
  try {
    await createRestaurantSrv(req.body, req.user);
    return res.status(200).json({ message: "succes make restaurant" });
  } catch (error) {
    return next(error);
  }
};

module.exports = createRestaurantCtl;
