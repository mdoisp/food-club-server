const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('company_employee', {
      company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'company',
          key: 'id',
        },
      },
      employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'employee',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('company_employee');
  },
};