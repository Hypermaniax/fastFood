const registerSrv = require("../../service/users/register.service");
const getMeSrv = require("../../service/users/getMe.service");
const loginSrv = require("../../service/users/login.service");

const loginCtl = async (req, res, next) => {
  try {
    const result = await loginSrv(req.body);
    res.cookie("token", result, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ success: true, message: "login success" });
  } catch (error) {
    next(error);
  }
};

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

const getMeCtl = async (req, res, next) => {
  try {
    const getMe = await getMeSrv(req.user.uuid);
    return res.status(200).json({ data: getMe });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerCtl, getMeCtl, loginCtl };
