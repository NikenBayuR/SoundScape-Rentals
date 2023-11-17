"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      User.hasMany(models.Package, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
          isUnique: async function (value) {
            const user = await User.findOne({ where: { email: value } });
            if (user) {
              throw new Error("Email already exists");
            }
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `password must be filled`,
          },
          notNull: {
            msg: `Password must be filled`,
          },
          len: [5, 255],
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    let hashSync = hash(user.password);
    user.password = hashSync;
  });
  return User;
};
