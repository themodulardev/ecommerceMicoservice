'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Merchant, { foreignKey: 'merchantId' });
      Product.hasMany(models.Review, { foreignKey: 'productId', onDelete: 'CASCADE' });
      Product.hasMany(models.OrderItem, { foreignKey: 'productId', onDelete: 'CASCADE' });
      Product.belongsToMany(models.Category, {
        through: models.ProductCategory,
        foreignKey: 'productId'
      });
    }

  }
  Product.init({
    merchantId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};