const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Order_Company', {
      ID_Pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Numero_Pedido: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      ID_Empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Empresa',
          key: 'ID_Empresa',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Order_Company');
  },
};