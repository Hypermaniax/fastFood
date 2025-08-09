const getAllFoodByIdSrv = require("../../service/public/getAllFoodByIdSrv");

const getAllFoodByIdCtl = async (req, res, next) => {
  try {
    const result = await getAllFoodByIdSrv(req.params.id);

    return res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllFoodByIdCtl;
