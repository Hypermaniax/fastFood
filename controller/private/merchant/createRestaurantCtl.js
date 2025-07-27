const createRestaurantSrv = require("../../../service/private/merchant/createRestaurantSrv");

const createRestaurantCtl = async (req, res) => {
  const create = await createRestaurantSrv(req.body);
};

module.exports = createRestaurantCtl;
