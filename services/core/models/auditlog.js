'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuditLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AuditLog.belongsTo(models.User, { foreignKey: 'userId' });
    }

  }
  AuditLog.init({
    userId: DataTypes.INTEGER,
    action: DataTypes.STRING,
    entity: DataTypes.STRING,
    entityId: DataTypes.INTEGER,
    details: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'AuditLog',
  });
  return AuditLog;
};