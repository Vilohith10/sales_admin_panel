const { Wholesaler, Retailer, Stock, sequelize } = require('../models');

const getRetailersByWholesaler = async (wholesaler_id) => {
  return await Wholesaler.findByPk(wholesaler_id, {
    include: Retailer
  });
};

const getMonthlyTurnover = async () => {
  return await Stock.findAll({
    attributes: [
      'wholesaler_id',
      [sequelize.fn('date_trunc', 'month', sequelize.col('date')), 'month'],
      [sequelize.fn('sum', sequelize.col('stock_amount')), 'total_turnover']
    ],
    group: ['wholesaler_id', 'month'],
    raw: true
  });
};

const getMaxTurnover = async () => {
  return await Stock.findAll({
    attributes: [
      'wholesaler_id',
      'retailer_id',
      [sequelize.fn('max', sequelize.col('stock_amount')), 'max_turnover']
    ],
    group: ['wholesaler_id', 'retailer_id'],
    raw: true
  });
};

module.exports = { getRetailersByWholesaler, getMonthlyTurnover, getMaxTurnover };