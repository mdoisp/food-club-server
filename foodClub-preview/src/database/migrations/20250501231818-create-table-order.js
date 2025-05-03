const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Order', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Employees',
          key: 'id'
        }
      },
      dishId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Dishes',
          key: 'idPrato'
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
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Orders');
  }
};