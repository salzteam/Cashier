const transactionsRouter = require("express").Router();

const transactionsController = require("../controllers/transactions");
const { create, listTranscation, listTranscationUsers } =
  transactionsController;
// const validate = require("../middlewares/validate");
// const isLogin = require("../middlewares/isLogin");

transactionsRouter.get("/", listTranscation);
transactionsRouter.get("/byUser", listTranscationUsers);
transactionsRouter.post("/create", create);
// transactionsRouter.delete("/", isLogin(), logout);
// transactionsRouter.patch("/", validate.params("email", "otp", "new_password"), forgot);

module.exports = transactionsRouter;
