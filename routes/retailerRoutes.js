const express = require('express');
const router = express.Router();
const retailerController = require('../controllers/retailerController');

router.get('/single-wholesaler', retailerController.getSingleWholesalerRetailer);

module.exports = router;