'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userrole extends Model {
    static associate(models) {
      // define association here
      // Userrole.hasMany(models.User)
    }
  }
  Userrole.init({
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Userrole',
  });
  return Userrole;
};