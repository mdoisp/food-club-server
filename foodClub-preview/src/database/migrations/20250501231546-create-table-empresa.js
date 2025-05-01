const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Empresa', {
      ID_Empresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome_Empresa: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Rua: {
        type: DataTypes.STRING(100),
      },
      CNPJ: {
        type: DataTypes.STRING(20),
        unique: true,
      },
      CEP: {
        type: DataTypes.STRING(10),
      },
      Numero: {
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
    await queryInterface.dropTable('Empresa');
  },
};