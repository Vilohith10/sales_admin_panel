// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sales_admin_panel', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
