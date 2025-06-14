'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [
      {
        id: 1,
        email: 'admin@tech.com',
        password: 'password123',
        user_type: 'restaurant',

      },
      {
        id: 2,
        email: 'company@tech.com',
        password: 'password123',
        user_type: 'company',
      },
      {
        id: 3,
        email: 'employee@tech.com',
        password: 'password123',
        user_type: 'employee',
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
}; 