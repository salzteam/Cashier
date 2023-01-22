const transactionRepo = require("../repo/transactions");

const create = async (req, res) => {
  const result = await transactionRepo.create(req.body);
  res
    .status(result.code)
    .send({ StatusCode: result.code, Message: result.msg });
};

const listTranscation = async (req, res) => {
  const result = await transactionRepo.listTransactions();
  res.status(result.code).send(result.data);
};

const listTranscationUsers = async (req, res) => {
  const result = await transactionRepo.listTransactionsUser(req.query);
  res.status(result.code).send(result.data);
};

module.exports = { create, listTranscation, listTranscationUsers };
