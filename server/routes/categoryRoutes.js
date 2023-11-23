const categoryRouter = require("express").Router();
const categoryController = require("../controller/CategoryController");

categoryRouter.post("/", categoryController.addCategory);
categoryRouter.get("/categoryFinder", categoryController.category);
categoryRouter.get("/:id", categoryController.categoryById);
categoryRouter.put("/:id", categoryController.updateCategoryById);
categoryRouter.delete("/:id", categoryController.deleteCategoryById);


module.exports = categoryRouter;
