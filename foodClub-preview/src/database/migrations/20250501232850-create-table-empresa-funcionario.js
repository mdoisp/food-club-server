const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('EmpresaFuncionario', {
      ID_Empresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Empresa',
          key: 'ID_Empresa',
        },
      },
      ID_Funcionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Funcionario',
          key: 'ID_Funcionario',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('EmpresaFuncionario');
  },
};