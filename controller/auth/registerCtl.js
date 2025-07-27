const registerSrv = require("../../service/users/registerSrv");

const registerCtl = async (req, res, next) => {
  try {
    await registerSrv(req.body);
    return res.status(200).json({
      succes: true,
      message: `Succes Register With Username ${req.body.username}`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = registerCtl;
