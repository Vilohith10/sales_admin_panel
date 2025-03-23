const wholesalerService = require('../services/wholesalerService');

const getRetailersByWholesaler = async (req, res) => {
  try {
    const wholesaler = await wholesalerService.getRetailersByWholesaler(req.params.wholesaler_id);
    if (!wholesaler) return res.status(404).json({ message: 'Wholesaler not found' });
    res.json(wholesaler);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMonthlyTurnover = async (req, res) => {
  try {
    const turnover = await wholesalerService.getMonthlyTurnover();
    res.json(turnover);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMaxTurnover = async (req, res) => {
  try {
    const maxTurnover = await wholesalerService.getMaxTurnover();
    res.json(maxTurnover);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRetailersByWholesaler, getMonthlyTurnover, getMaxTurnover };