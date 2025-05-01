const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('PedidoFunc_Prato', {
      ID_PedidoFunc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Pedido_Funcionario',
          key: 'ID_PedidoFunc',
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
    await queryInterface.dropTable('PedidoFunc_Prato');
  },
};