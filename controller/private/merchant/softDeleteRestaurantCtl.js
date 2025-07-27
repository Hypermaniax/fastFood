const softDeleteRestaurantSrv = require("../../../service/private/merchant/softDeleteRestaurantSrv");

const softDeleteRestaurantCtl = async (req, res, next) => {
  try {
    const softDelete = await softDeleteRestaurantSrv(
      req.params.id,
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: `you have succes to delete Restaurant ${softDelete}`,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = softDeleteRestaurantCtl;
