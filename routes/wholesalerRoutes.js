const express = require('express');
const router = express.Router();
const wholesalerController = require('../controllers/wholesalerController');

router.get('/:wholesaler_id/retailers', wholesalerController.getRetailersByWholesaler);
router.get('/monthly-turnover', wholesalerController.getMonthlyTurnover);
router.get('/max-turnover', wholesalerController.getMaxTurnover);

module.exports = router;