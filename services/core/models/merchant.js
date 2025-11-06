'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Merchant.hasMany(models.Product, { foreignKey: 'merchantId', onDelete: 'CASCADE' });
      Merchant.hasMany(models.Order, { foreignKey: 'merchantId', onDelete: 'CASCADE' });
      Merchant.hasMany(models.Setting, { foreignKey: 'merchantId', onDelete: 'CASCADE' });
    }

  }
  Merchant.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT,
    logo: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Merchant',
  });
  return Merchant;
};