const transactionsRouter = require("express").Router();

const transactionsController = require("../controllers/transactions");
const { create, listTranscation, listTranscationUsers } =
  transactionsController;
const validate = require("../middlewares/validate");

transactionsRouter.get("/", listTranscation);
transactionsRouter.get("/byUser", validate.params("id"), listTranscationUsers);
transactionsRouter.post("/create", validate.body("userid", "product"), create);
module.exports = transactionsRouter;
