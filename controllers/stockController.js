const stockService = require('../services/stockService');

const addStockTransaction = async (req, res) => {
  try {
    const newStock = await stockService.addStockTransaction(req.body);
    res.status(201).json(newStock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addStockTransaction };