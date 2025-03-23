const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.post('/add', stockController.addStockTransaction);

module.exports = router;