const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Restaurant_Dish', {
      ID_Restaurantes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Restaurante',
          key: 'ID_Restaurantes',
        },
      },
      ID_Prato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Prato',
          key: 'ID_Prato',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Restaurant_Dish');
  },
};