const createRestaurantSrv = require("../../../service/private/merchant/createRestaurantSrv");

const createRestaurantCtl = async (req, res) => {
  await createRestaurantSrv(req.body, req.user);
  res.status(200).json({ message: "succes make restaurant" });
};

module.exports = createRestaurantCtl;
