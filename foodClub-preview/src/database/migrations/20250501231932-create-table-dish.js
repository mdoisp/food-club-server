const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Dish', {
      ID_Prato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome_Prato: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Descricao_Prato: {
        type: DataTypes.TEXT,
      },
      Preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Dish');
  },
};