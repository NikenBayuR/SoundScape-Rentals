const userRouter = require("express").Router();
const userController = require("../controller/AuthController");
const authentication = require("../middlewares/authentication");
userRouter.post("/register", authentication, userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/", userController.user);
userRouter.get("/:id", userController.userById);
userRouter.put("/:id", userController.updateUserById);
userRouter.post("/google-login", userController.googleLogin);
module.exports = userRouter;

