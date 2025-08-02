const loginSrv = require("../../service/users/loginSrv");

const loginCtl = async (req, res, next) => {
  try {
    const result = await loginSrv(req.body);
    res.cookie("token", result.token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ success: true, message: "succes login", user: result.user });
  } catch (error) {
    next(error);
  }
};

module.exports = loginCtl;
