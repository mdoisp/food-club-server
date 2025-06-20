'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dish', [
      // Restaurant 1 dishes
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
      },
      
      // Restaurant 2 dishes
      {
        id: 4,
        restaurantId: 2,
        name: 'Lasagna Bolognese',
        description: 'Layers of pasta with rich meat sauce and béchamel.',
        price: 15.99,
        image: null,
      },
      {
        id: 5,
        restaurantId: 2,
        name: 'Risotto ai Funghi',
        description: 'Creamy risotto with wild mushrooms and parmesan.',
        price: 13.99,
        image: null,
      },
      
      // Restaurant 3 dishes
      {
        id: 6,
        restaurantId: 3,
        name: 'Tacos al Pastor',
        description: 'Marinated pork tacos with pineapple and cilantro.',
        price: 10.99,
        image: null,
      },
      {
        id: 7,
        restaurantId: 3,
        name: 'Enchiladas Verdes',
        description: 'Corn tortillas rolled around chicken and covered with green salsa.',
        price: 11.99,
        image: null,
      },
      
      // Restaurant 4 dishes
      {
        id: 8,
        restaurantId: 4,
        name: 'Sushi Combo',
        description: 'Assorted sushi pieces with miso soup.',
        price: 18.99,
        image: null,
      },
      {
        id: 9,
        restaurantId: 4,
        name: 'Ramen Tonkotsu',
        description: 'Pork bone broth ramen with noodles and toppings.',
        price: 14.99,
        image: null,
      },
      
      // Restaurant 5 dishes
      {
        id: 10,
        restaurantId: 5,
        name: 'Vegan Burger',
        description: 'Plant-based burger with all the fixings.',
        price: 11.99,
        image: null,
      },
      {
        id: 11,
        restaurantId: 5,
        name: 'Quinoa Salad',
        description: 'Fresh salad with quinoa, vegetables and tahini dressing.',
        price: 9.99,
        image: null,
      },
      
      // Restaurant 6 dishes
      {
        id: 12,
        restaurantId: 6,
        name: 'BBQ Ribs',
        description: 'Slow-cooked ribs with house BBQ sauce.',
        price: 19.99,
        image: null,
      },
      {
        id: 13,
        restaurantId: 6,
        name: 'Pulled Pork Sandwich',
        description: 'Tender pulled pork on a brioche bun with coleslaw.',
        price: 12.99,
        image: null,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dish', null, {});
  }
};