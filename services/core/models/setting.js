'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Setting.belongsTo(models.Merchant, { foreignKey: 'merchantId' });
    }

  }
  Setting.init({
    merchantId: DataTypes.INTEGER,
    key: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Setting',
  });
  return Setting;
};