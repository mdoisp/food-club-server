const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Employee', {
      idFuncionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Company',
          key: 'IdEmpresa'
        }
      },
      position: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      department: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Employee');
  }
};