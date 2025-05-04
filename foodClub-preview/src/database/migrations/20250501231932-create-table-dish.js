const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Dish', {
      idDish: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      ingredients: {
        type: DataTypes.TEXT, // Armazena como texto
        allowNull: false,
        defaultValue: JSON.stringify([]), // Array vazio como JSON
        get() {
          return JSON.parse(this.getDataValue('ingredients'));
        },
        set(value) {
          this.setDataValue('ingredients', JSON.stringify(value));
        }
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Restaurant',
          key: 'idRestaurante'
        }
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Dish');
  }
};