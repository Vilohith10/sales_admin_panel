const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Wholesaler = sequelize.define('Wholesaler', {
  name: DataTypes.STRING,
  mobile_number: DataTypes.STRING
}, { timestamps: false });

module.exports = Wholesaler;