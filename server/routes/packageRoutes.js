const packageRouter = require("express").Router();
const PackageController = require("../controller/PackageController");

packageRouter.get("/", PackageController.readPackage);
packageRouter.post("/", PackageController.addPackage);
packageRouter.get("/:id", PackageController.readPackageById);
packageRouter.put("/:id", PackageController.updatePackageById);
packageRouter.delete("/:id", PackageController.deletedPackageById)

module.exports = packageRouter;
