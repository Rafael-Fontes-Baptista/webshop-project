"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.order)
    }
  }
  user.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, unique: true, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      phone: DataTypes.INTEGER,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user",
    }
  )
  return user
}
