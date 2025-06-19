'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employee', [
      {
        id: 1,
        userId: 3,
        companyId: 1,
        name: 'João da Silva',
        cpf: '123.456.789-00',
        birthDate: '1990-01-01',
        vacation: false,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('employee', null, {});
  }
}; 