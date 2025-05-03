const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Order_Company_Dish', {
      ID_Pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Pedido_Empresa',
          key: 'ID_Pedido',
        },
      },
      ID_Prato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Prato',
          key: 'ID_Prato',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Order_Company_Dish');
  },
};