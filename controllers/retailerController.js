const retailerService = require('../services/retailerService');

const getSingleWholesalerRetailer = async (req, res) => {
  try {
    const singleWholesalerRetailers = await retailerService.getSingleWholesalerRetailers();
    res.json(singleWholesalerRetailers);
  } catch (error) {
    console.log('error-=--', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getSingleWholesalerRetailer };