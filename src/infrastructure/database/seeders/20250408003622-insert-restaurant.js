'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('restaurant', [
      {
        id: 1,
        userId: 1,
        name: 'Sabores do Chef',
        cnpj: '12.345.678/0001-90',
        cep: '12345-678',
        number: '123',
        image: 'https://www.tripadvisor.com.br/Restaurant_Review-g303235-d12083289-Reviews-Sabores_do_Chef_Picanharia-Manaus_Amazon_River_State_of_Amazonas.html',
      },
      {
        id: 2,
        userId: 2,
        name: 'Trattoria Italiana',
        cnpj: '23.456.789/0001-01',
        cep: '23456-789',
        number: '456',
        image: 'https://bomgourmet.com/bomgourmet/restaurantes/osteria-trattoria-ristorante-diferencas-locais-tipicos-italia/',
      },
      {
        id: 3,
        userId: 3,
        name: 'Cantina Mexicana',
        cnpj: '34.567.890/0001-12',
        cep: '34567-890',
        number: '789',
        image: 'https://m.yelp.com/biz/la-cantina-mexicana-sevilla',
      },
      {
        id: 4,
        userId: 4,
        name: 'Sushi Palace',
        cnpj: '45.678.901/0001-23',
        cep: '45678-901',
        number: '101',
        image: 'https://www.archdaily.com.br/br/906125/takeshi-temakeria-and-sushi-bar-studio-bloco-arquitetura',
      },
      {
        id: 5,
        userId: 5,
        name: 'Green Vegan',
        cnpj: '56.789.012/0001-34',
        cep: '56789-012',
        number: '202',
        image: 'https://simonde.com.br/teva-vegetal-sao-paulo-restaurante-vegano-gastronomico-onde-carnistas-nao-sentem-falta-de-comer-animais-organicos-onde-comer/',
      },
      {
        id: 6,
        userId: 6,
        name: 'Texas BBQ',
        cnpj: '67.890.123/0001-45',
        cep: '67890-123',
        number: '303',
        image: 'https://www.dbresciachurrascaria.com.br/unidades/guarulhos/',
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('restaurant', null, {});
  }
};