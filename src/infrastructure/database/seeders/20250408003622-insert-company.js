'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('company', [
      {
        id: 1,
        userId: 2,
        name: 'Food Club',
        cnpj: '12.345.678/0001-90',
        cep: '12345-678',
        number: '123',
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('company', null, {});
  }
}; 