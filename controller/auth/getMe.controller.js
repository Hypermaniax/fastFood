const getMeSrv = require("../../service/users/getMe.service");

const getMeCtl = async (req, res, next) => {
  try {
    const getMe = await getMeSrv(req.user.uuid);
    return res.status(200).json({ data: getMe });
  } catch (error) {
    next(error);
  }
};
module.exports = getMeCtl;
