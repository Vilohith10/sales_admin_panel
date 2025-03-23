const { Stock } = require('../models');

const addStockTransaction = async (stockData) => {
  return await Stock.create(stockData);
};

module.exports = { addStockTransaction };