'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dish_rating', [
      {
        id: 1,
        dishId: 1,
        userId: 1,
        rating: 5,
      },
      {
        id: 2,
        dishId: 1,
        userId: 1,
        rating: 3,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dish_rating', null, {});
  }
}; 