const usersRepo = require("../repo/users");

const listUser = async (req, res) => {
  const result = await usersRepo.listUser();
  res.status(result.code).send(result.msg);
};

module.exports = { listUser };
