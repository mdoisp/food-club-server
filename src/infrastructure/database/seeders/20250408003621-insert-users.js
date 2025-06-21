'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const hashedPasswordRestarant = await bcrypt.hash('restaurante123', saltRounds);
    const hashedPasswordCompany = await bcrypt.hash('empresa123', saltRounds);
    const hashedPasswordEmployee = await bcrypt.hash('funcionario123', saltRounds);
    


    return queryInterface.bulkInsert('user', [
      // Restaurants (6)
      {
        id: 1,
        email: 'admin@tech.com',
        password: hashedPasswordRestarant,
        user_type: 'restaurant',
        profile_Image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/d9/aa/99/nova-unidade-do-sabores.jpg?w=900&h=-1&s=1'
      },
      {
        id: 2,
        email: 'italian@restaurant.com',
        password: hashedPasswordRestarant,
        user_type: 'restaurant',
        profile_Image:'https://resize.casapino.com.br/?u=https://cms-bomgourmet.s3.amazonaws.com/bomgourmet/2019/01/201901/osteria-trattoria-ristorante-italia-18ceab70.jpg&w=480'
      },
      {
        id: 3,
        email: 'mexican@restaurant.com',
        password: hashedPasswordRestarant,
        user_type: 'restaurant',
        profile_Image:'https://m.yelp.com/biz/la-cantina-mexicana-sevilla'
      },
      {
        id: 4,
        email: 'japanese@restaurant.com',
        password: hashedPasswordRestarant,
        user_type: 'restaurant',
        profile_Image:'https://www.archdaily.com.br/br/906125/takeshi-temakeria-and-sushi-bar-studio-bloco-arquitetura'
      },
      {
        id: 5,
        email: 'vegan@restaurant.com',
        password: hashedPasswordRestarant,
        user_type: 'restaurant',
        profile_Image:'https://simonde.com.br/teva-vegetal-sao-paulo-restaurante-vegano-gastronomico-onde-carnistas-nao-sentem-falta-de-comer-animais-organicos-onde-comer/'
      },
      {
        id: 6,
        email: 'bbq@restaurant.com',
        password: hashedPasswordRestarant,
        user_type: 'restaurant',
        profile_Image:'https://www.dbresciachurrascaria.com.br/unidades/guarulhos/'
      },
      
      // Companies (3)
      {
        id: 7,
        email: 'company@tech.com',
        password: hashedPasswordCompany,
        user_type: 'company',
        profile_Image:'https://br.freepik.com/vetores/logo-empresa'
      },
      {
        id: 8,
        email: 'foodlovers@company.com',
        password: hashedPasswordCompany,
        user_type: 'company',
        profile_Image:'https://br.freepik.com/vetores/logotipos-empresa/2'
      },
      {
        id: 9,
        email: 'gourmet@company.com',
        password: hashedPasswordCompany,
        user_type: 'company',
        profile_Image:'https://cincodias.elpais.com/cincodias/2015/05/08/pyme/1431098283_691735.html'
      },
      
      // Employees (6)
      {
        id: 10,
        email: 'employee@tech.com',
        password: hashedPasswordEmployee,
        user_type: 'employee',
        profile_Image:'https://unsplash.com/pt-br/s/fotografias/profile'
      },
      {
        id: 11,
        email: 'maria@employee.com',
        password: hashedPasswordEmployee,
        user_type: 'employee',
        profile_Image:'https://www.gettyimages.com.br/fotos/profile-picture'
      },
      {
        id: 12,
        email: 'carlos@employee.com',
        password: hashedPasswordEmployee,
        user_type: 'employee',
        profile_Image:'https://unsplash.com/pt-br/s/fotografias/pessoa-sorrindo'
      },
      {
        id: 13,
        email: 'ana@employee.com',
        password: hashedPasswordEmployee,
        user_type: 'employee',
        profile_Image:'https://br.freepik.com/fotos/perfil-de-pessoas'
      },
      {
        id: 14,
        email: 'pedro@employee.com',
        password: hashedPasswordEmployee,
        user_type: 'employee',
        profile_Image:'https://unsplash.com/pt-br/s/fotografias/random-person'
      },
      {
        id: 15,
        email: 'lucia@employee.com',
        password: hashedPasswordEmployee,
        user_type: 'employee',
        profile_Image:'https://www.pexels.com/pt-br/procurar/pessoa%20feliz/'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};