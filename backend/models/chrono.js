'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chrono extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chrono.belongsTo(models.Task)
    }
  }
  Chrono.init({
    taskId: DataTypes.INTEGER,
    githubLink: DataTypes.STRING,
    hours: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Chrono',
  });
  return Chrono;
};