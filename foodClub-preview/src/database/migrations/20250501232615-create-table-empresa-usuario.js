const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Empresa_Usuario', {
      ID_Empresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Empresa',
          key: 'ID_Empresa',
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
    await queryInterface.dropTable('Empresa_Usuario');
  },
};