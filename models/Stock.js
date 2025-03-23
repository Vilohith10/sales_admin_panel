const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Stock = sequelize.define('Stock', {
    wholesaler_id: DataTypes.INTEGER,
    retailer_id: DataTypes.INTEGER,
    stock_amount: DataTypes.FLOAT,
    date: DataTypes.DATE
  }, { timestamps: false });
  
  module.exports = Stock;