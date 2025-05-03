const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Company_User', {
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
    await queryInterface.dropTable('Company_User');
  },
};