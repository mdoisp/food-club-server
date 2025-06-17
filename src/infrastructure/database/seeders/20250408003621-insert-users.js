'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('password123', saltRounds);

    return queryInterface.bulkInsert('user', [
      {
        id: 1,
        email: 'admin@tech.com',
        password: hashedPassword,
        user_type: 'restaurant',
      },
      {
        id: 2,
        email: 'company@tech.com',
        password: hashedPassword,
        user_type: 'company',
      },
      {
        id: 3,
        email: 'employee@tech.com',
        password: hashedPassword,
        user_type: 'employee',
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
}; 