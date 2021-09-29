"use strict";

var express = require('express');

var shopController = require('../controllers/shop-controller');

var router = express.Router();
router.post('/search/', shopController.postSearch);
router.get('/', shopController.getIndex);
module.exports = router;