const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Pedido_Funcionario', {
      ID_PedidoFunc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ValorPedido: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      ID_Funcionario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Funcionario',
          key: 'ID_Funcionario',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Pedido_Funcionario');
  },
};