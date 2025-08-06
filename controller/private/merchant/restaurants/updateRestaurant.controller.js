const updateRestaurantSrv = require("../../../../service/private/merchant/restaurants/updateRestaurantSrv");

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

module.exports = updateRestaurantCtl;
