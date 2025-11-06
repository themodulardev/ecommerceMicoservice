'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Order.belongsTo(models.User, { foreignKey: 'userId' });
  Order.belongsTo(models.Merchant, { foreignKey: 'merchantId' });
  Order.hasMany(models.OrderItem, { foreignKey: 'orderId', onDelete: 'CASCADE' });
  Order.hasOne(models.Payment, { foreignKey: 'orderId', onDelete: 'CASCADE' });
}

  }
  Order.init({
    userId: DataTypes.INTEGER,
    merchantId: DataTypes.INTEGER,
    totalAmount: DataTypes.FLOAT,
    status: DataTypes.STRING,
    paymentMode: DataTypes.STRING,
    shippingAddress: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};