const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Company', {
      idEmpresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nomeEmpresa: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      rua: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      cnpj: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true
      },
      cep: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      numero: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      cidade: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      estado: {
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