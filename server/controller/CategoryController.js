const { Category } = require("../models");
class CategoryController {
  static async category(req, res, next) {
    try {
      const categories = await Category.findAll();
      if (!categories) throw new Error("Categories does not exist");
      res.status(200).json({ categories });
    } catch (err) {
      next(err);
    }
  }
  static async addCategory(req, res, next) {
    try {
      const { name, imageURL } = req.body;
      const newCategory = await Category.create({
        name,
        imageURL,
      });
      if (!newCategory) throw new Error("AddCategoryError");
      res
        .status(201)
        .json({ message: `category has been created succesfully` });
    } catch (err) {
      next(err);
    }
  }

  static async categoryById(req, res, next) {
    try {
      const { id } = req.params;
      let category = await Category.findByPk(id);
      if (!category) throw new Error(`Categories does not exist`);
      res.status(200).json({ category });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async updateCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      let category = await Category.findByPk(id);
      if (!category) {
        throw new Error(`Categories does not exist`);
      }
      const { name, imageURL } = req.body;
      category = await Category.update(
        {
          name,
          imageURL,
        },
        {
          where: { id },
        }
      );
      res.status(200).json({
        message: `Category with id ${id} updated`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategoryById(req, res, next) {
    try {
      const id = req.params;
      const category = await Category.findOne(id, {
        attributes: ["name"],
      });
      let deleted = `${category.name} succes to deleted`;
      const categorie = await Category.destroy({ where: id });
      if (!categorie) throw new Error(`Categories does not exist`);
      res.status(200).json({
        message: deleted,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
module.exports = CategoryController;
