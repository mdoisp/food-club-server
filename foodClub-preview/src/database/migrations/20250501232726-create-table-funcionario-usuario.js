const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Funcionario_Usuario', {
      ID_Funcionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Funcionario',
          key: 'ID_Funcionario',
        },
      },
      ID_Usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Usuario',
          key: 'ID_Usuario',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Funcionario_Usuario');
  },
};