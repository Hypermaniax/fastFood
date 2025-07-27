const readRestaurantSrv = require("../../../../service/private/merchant/restaurants/readRestaurantSrv");

const readRestaurantCtl = async (req, res, next) => {
  try {
    const read = await readRestaurantSrv(req.params.id, req.user.id);

    return res.status(200).json({ succes: true, data: read });
  } catch (error) {
    next(error);
  }
};
module.exports = readRestaurantCtl;
