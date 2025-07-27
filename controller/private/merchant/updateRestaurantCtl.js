const updateRestaurantSrv = require("../../../service/private/merchant/updateRestaurantSrv");

const updateRestaurantCtl = async (req, res) => {
  await updateRestaurantSrv(req.body, req.params.id, req.user.id);
  return res.status(200).json({ message: "succes for update Merchant" });
};

module.exports = updateRestaurantCtl;
