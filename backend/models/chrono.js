'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chrono extends Model {
    static associate(models) {
      // define association here
      Chrono.belongsTo(models.Task)
    }
  }
  Chrono.init({
    taskId: DataTypes.INTEGER,
    githubLink: DataTypes.STRING,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Chrono',
  });
  return Chrono;
};