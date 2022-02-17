'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {onDelete: 'cascade'});
      User.hasMany(models.Userrole , {onDelete: 'cascade'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nationality: DataTypes.STRING,
    birthday: DataTypes.DATE,
    speciality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};