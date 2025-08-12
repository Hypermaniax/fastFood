const createCategorySrv = require("../../../service/private/merchant/menuCategory/createCategorySrv");

const createCategoryCtl = async (req, res, next) => {
  try {
    const result = await createCategorySrv(req.body);
    return res.status(200).json({
      succes: true,
      data: result,
      message: "Succes Make Menu Category",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createCategoryCtl