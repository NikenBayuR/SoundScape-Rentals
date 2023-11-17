"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Package.belongsTo(models.User, { foreignKey: "UserId" });
      Package.belongsTo(models.Category, { foreignKey: "CategoryId" });
    }
  }
  Package.init(
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
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "price tidak boleh kosong",
          },
          notNull: {
            args: true,
            msg: "price tidak boleh Null",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "description tidak boleh kosong",
          },
          notNull: {
            args: true,
            msg: "description tidak boleh Null",
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
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Category tidak boleh kosong",
          },
          notNull: {
            args: true,
            msg: "Category tidak boleh Null",
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Package",
    }
  );
  return Package;
};
