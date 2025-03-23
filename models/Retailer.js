const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Retailer = sequelize.define('Retailer', {
    name: DataTypes.STRING,
    mobile_number: DataTypes.STRING
  }, { timestamps: false });
  
  module.exports = Retailer;