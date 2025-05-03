const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Employee_User', {
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
    await queryInterface.dropTable('Employee_User');
  },
};