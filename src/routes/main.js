const express = require("express");

mainRouter = express.Router();
const usersRouter = require("./users");
const transactionsRouter = require("./transactions");
const prefix = "/api/v1";

mainRouter.use(`${prefix}/users`, usersRouter);
mainRouter.use(`${prefix}/transactions`, transactionsRouter);

mainRouter.get("/", (_, res) => {
  res.json({ msg: "Welcome" });
});
module.exports = mainRouter;
