const { Retailer, Stock } = require('../models');
const { Sequelize } = require('sequelize');

const getSingleWholesalerRetailers = async () => {
  try {
    const retailers = await Retailer.findAll({
      include: [
        {
          model: Stock,
          attributes: [],
        }
      ],
      attributes: ['id', 'name', 'mobile_number'],
      group: ['Retailer.id'],
      having: Sequelize.literal('COUNT(DISTINCT "Stocks"."wholesaler_id") = 1')
    });
    return retailers;
  } catch (error) {
    console.error('Error fetching retailers with only one wholesaler:', error);
    throw error;
  }
};

module.exports = { getSingleWholesalerRetailers };
