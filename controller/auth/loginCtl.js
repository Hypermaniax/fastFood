const loginSrv = require("../../service/users/loginSrv");

const loginCtl = async (req, res) => {
  const token = await loginSrv(req.body);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // harus pakai HTTPS di production
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari
  });
  return res.status(200).json({ message: "succes login" });
};

module.exports = loginCtl;
