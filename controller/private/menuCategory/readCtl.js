const readAllCategorySrv = require("../../../service/private/merchant/menuCategory/readAllCategory");

const readCtl = async (req, res, next) => {
  try {
    const result = await readAllCategorySrv(req.params.id);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = readCtl;
