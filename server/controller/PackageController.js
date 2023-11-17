const { Package } = require("../models");
class PackageController {
  static async readPackage(req, res, next) {
    try {
      const packages = await Package.findAll();
      if (!packages) throw new Error("Package does not exist");
      res.status(200).json({ packages });
    } catch (err) {
      next(err);
    }
  }
  static async readPackageById(req, res, next) {
    try {
      const { id } = req.params;
      const packages = await Package.findByPk(id);
      console.log(packages);
      if (!packages) throw new Error(`Package does not exist`);
      res.status(200).json({ packages });
    } catch (err) {
      next(err);
    }
  }
  static async addPackage(req, res, next) {
    const UserId = req.loginInfo.UserId;
    try {
      const { name, price, description, imageURL, CategoryId } = req.body;
      const newPackage = await Package.create({
        name,
        price,
        description,
        imageURL,
        CategoryId,
        UserId,
      });
      if (!newPackage) throw new Error("AddPackageError");
      res.status(201).json({ message: `Package has been created succesfully` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async updatePackageById(req, res, next) {
    try {
      const { id } = req.params;
      let packages = await Package.findByPk(id);
      if (!packages) {
        throw new Error(`Packages does not exist`);
      }
      const { name, price, description, imageURL, CategoryId } = req.body;
      packages = await Package.update(
        {
          name,
          price,
          description,
          imageURL,
          CategoryId,
        },
        {
          where: { id },
        }
      );
      res.status(200).json({
        message: `Package wiith id ${id} updated`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deletedPackageById(req,res,next) {
    try {
      const id = req.params
      const packages = await Package.findOne(id,{
        attributes: ["name"],
      });
      let deleted = `${packages.name} succes to deleted`;
      const packagess = await Package.destroy({where: id})
      if(!packagess) throw new Error (`Not found`)
      res.status(200).json({message: packagess})
    } catch (err) {
      console.log(err);
      next(err)
      
    }
  }
}

module.exports = PackageController;
