'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Restaurant', [
        {
          nomeEmpresa: '',
          fone: '',
          email: ''
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Restaurant', null, {});
  }
};
