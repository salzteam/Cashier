const authRouter = require("express").Router();

const usersController = require("../controllers/users");
const { listUser } = usersController;
// const validate = require("../middlewares/validate");
// const isLogin = require("../middlewares/isLogin");

authRouter.get("/", listUser);
// authRouter.post("/", validate.body("email", "password"), login);
// authRouter.delete("/", isLogin(), logout);
// authRouter.patch("/", validate.params("email", "otp", "new_password"), forgot);

module.exports = authRouter;
