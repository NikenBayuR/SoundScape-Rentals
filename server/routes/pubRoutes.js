const pubRouter = require("express").Router();
const PubController = require("../controller/PubController");

pubRouter.get("/:id", PubController.readCategoryPublicById);


module.exports = pubRouter;
