'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dish', [
      {
        id: 1,
        restaurantId: 1,
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        price: 12.99,
        image: null,
      },
      {
        id: 2,
        restaurantId: 1,
        name: 'Margherita Pizza',
        description: 'Traditional pizza with tomato sauce, fresh mozzarella, basil, and olive oil.',
        price: 14.99,
        image: null,
      },
      {
        id: 3,
        restaurantId: 1,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
        price: 7.99,
        image: null,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dish', null, {});
  }
}; 