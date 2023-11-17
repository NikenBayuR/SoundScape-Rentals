"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Package, { foreignKey: "CategoryId" });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name tidak boleh kosong",
          },
          notNull: {
            args: true,
            msg: "Name tidak boleh Null",
          },
        },
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "imageURL tidak boleh kosong",
          },
          notNull: {
            args: true,
            msg: "imageURL tidak boleh Null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
