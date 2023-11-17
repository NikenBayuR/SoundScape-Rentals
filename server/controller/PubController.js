const { Category, Package } = require("../models");
class PubController {
  static async readCategoryPublicById(req, res, next) {
    try {
      const { id } = req.params;
      console.log(id);
      const category = await Category.findByPk(id, {
        include: {
          model: Package,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      });
      console.log(category);
      if (!category) throw new Error(`Not found`);
      res.status(200).json({ data: category });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = PubController;
