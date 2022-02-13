'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // define association here
      // Role.hasMany(models.User);
      // Role.belongsTo(models.Userrole)
    }
  }
  Role.init({
    roleName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};