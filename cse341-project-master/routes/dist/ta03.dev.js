"use strict";

//TA03 PLACEHOLDER
var express = require('express');

var router = express.Router();

var Product = require('../jsonEngine');

router.post('/search', function (req, res, next) {
  var search = req.body.search.toLowerCase();
  var filteredProducts = [];
  console.log("Searched");
  Product.fetchAll(function (products) {
    filteredProducts = products.filter(function (product) {
      return product.name.toLowerCase().includes(search);
    });
    res.render('pages/ta03', {
      prods: filteredProducts,
      title: 'Search Results',
      path: '/'
    });
  });
});
router.get('/', function (req, res, next) {
  Product.fetchAll(function (products) {
    res.render('pages/ta03', {
      prods: products,
      title: 'Products',
      path: '/'
    });
  });
});
router.get('/', function (req, res, next) {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03',
    // For pug, EJS
    activeTA03: true,
    // For HBS
    contentCSS: true // For HBS

  });
});
module.exports = router;