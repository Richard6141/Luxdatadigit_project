'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required:true,
        allowNull:false,
      },
      surname: {
        type: Sequelize.STRING,
        required:true,
        allowNull:false,
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING,
        required:true,
        isEmail:true,
      },
      password: {
        type: Sequelize.STRING,
        required:true,
        allowNull:false,
        validate: {
          is: /^[0-9a-f]{64}$/i
        }
      },
      nationality: {
        type: Sequelize.STRING,
        required:true,
        allowNull:false,
      },
      birthday: {
        type: Sequelize.DATE
      },
      speciality: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};