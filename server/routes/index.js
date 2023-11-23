const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes");
const categoryRouter = require("./categoryRoutes");
const packageRouter = require("./packageRoutes");
const authentication = require("../middlewares/authentication");
const pubRouter = require("./pubRoutes");
router.use("/pub", pubRouter);
router.use("/users", userRouter); //tidak usah memakai authorizeAdmin tapi harus memakai authentication
// router.use(authentication);
router.use("/categories", categoryRouter); //memakai authorizeAdmin dan harus memakai authentication
router.use("/packages", packageRouter); //memakai authorizeAdmin dan harus memakai authentication


module.exports = router;
