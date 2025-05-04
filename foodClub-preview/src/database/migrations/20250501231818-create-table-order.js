const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Order', {
      idPedido: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      idFuncionario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Employee',
          key: 'idFuncionario'
        }
      },
      idPrato: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Dish',
          key: 'idDish'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      status: {
        type: DataTypes.ENUM(
          'pending',
          'confirmed',
          'preparing',
          'ready',
          'delivered',
          'cancelled'
        ),
        allowNull: false,
        defaultValue: 'pending'
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Order');
  }
};