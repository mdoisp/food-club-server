const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Restaurante', {
      ID_Restaurantes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome_Restaurante: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      CNPJ: {
        type: DataTypes.STRING(20),
        unique: true,
      },
      Rua: {
        type: DataTypes.STRING(100),
      },
      Numero: {
        type: DataTypes.STRING(10),
      },
      CEP: {
        type: DataTypes.STRING(10),
      },
      Cidade: {
        type: DataTypes.STRING(50),
      },
      Estado: {
        type: DataTypes.STRING(2),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Restaurante');
  },
};