'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dish_rating', [
      {
        id: 1,
        dishId: 1,
        userId: 3,
        rating: 5,
        description: 'Prato muito bom',
      },
      {
        id: 2,
        dishId: 1,
        userId: 3,
        rating: 3,
        description: 'Prato bom, mas poderia ser melhor',
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dish_rating', null, {});
  }
}; 