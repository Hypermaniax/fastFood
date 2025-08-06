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
    return res
      .status(200)
      .json({ success: true, message: "login success",});
  } catch (error) {
    next(error);
  }
};

module.exports = loginCtl;
