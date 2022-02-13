'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
      Task.hasMany(models.Chrono)
    }
  }
  Task.init({
    userId: DataTypes.INTEGER,
    taskName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};