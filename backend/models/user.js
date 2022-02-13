'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Task);
      User.hasMany(models.Userrole)
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