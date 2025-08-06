const { findUser } = require("../../database/queries/user");

const getMeSrv = async (uuid) => {
  const result = await findUser(uuid);

  return result;
};
module.exports = getMeSrv;
