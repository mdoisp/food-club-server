'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('brand', [
        {
          name: 'Garoto',
        },
        {
          name: 'Coca-Cola',
        },
        {
          name: 'Lacta',
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('brand', null, {});
  }
};
