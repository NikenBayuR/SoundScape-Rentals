const pubRouter = require("express").Router();
const PubController = require("../controller/PubController");
pubRouter.get("/finder", PubController.readCategoryPublic)
pubRouter.get("/finder/:id", PubController.readCategoryPublicById);


module.exports = pubRouter;
