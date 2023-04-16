'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
       id: {type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
       name: {type: Sequelize.STRING , allowNull: false},
       rent: {type: Sequelize.INTEGER , allowNull: false},
       size: {type: Sequelize.STRING , allowNull: false},
       img: {type: Sequelize.STRING , allowNull: false},
       createdAt: {type: Sequelize.DATE , allowNull: false},
       updatedAt: {type: Sequelize.DATE , allowNull: false}
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};