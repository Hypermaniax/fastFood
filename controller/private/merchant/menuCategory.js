const readAllCategorySrv = require("../../../service/private/merchant/menuCategory/readAllCategory");
const createCategorySrv = require("../../../service/private/merchant/menuCategory/createCategorySrv");

const readCtl = async (req, res, next) => {
  try {
    const result = await readAllCategorySrv(req.params.id);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

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

module.exports = { readCtl, createCategoryCtl };