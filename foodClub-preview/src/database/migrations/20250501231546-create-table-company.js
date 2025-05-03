const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Company', {
      IdEmpresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      NomeEmpresa: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      Rua: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      CNPJ: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true
      },
      CEP: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      Numero: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      Cidade: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      Estado: {
        type: DataTypes.STRING(2),
        allowNull: true
      },
      fone: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Company');
  }
};