"use strict"
const { Model } = require("sequelize")
const order_item = require("./order_item")
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.category)
      product.belongsToMany(models.order, {
        through: "order_items",
        foreignKey: "productId",
      })
    }
  }
  product.init(
    {
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      description: DataTypes.STRING,
      price: { type: DataTypes.FLOAT, allowNull: false },
      imageUrl: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
    }
  )
  return product
}
