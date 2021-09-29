const express = require('express');

const shopController = require('../controllers/shop-controller');

const router = express.Router();

router.post('/search/', shopController.postSearch);

router.get('/', shopController.getIndex);

module.exports = router;