'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('restaurant', [
      {
        id: 1,
        userId: 1,
        name: 'Restaurante Exemplo',
        cnpj: '12.345.678/0001-90',
        cep: '12345-678',
        number: '123',
        image: 'https://exemplo.com/imagem.jpg',
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('restaurant', null, {});
  }
}; 