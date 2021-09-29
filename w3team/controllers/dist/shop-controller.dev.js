"use strict";

var Product = require('../models/product');

exports.getIndex = function (req, res, next) {
  Product.fetchAll(function (products) {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Vikingware Shop',
      path: '/'
    });
  });
};

exports.postSearch = function (req, res, next) {
  var search = req.body.search.toLowerCase();
  var filteredProducts = [];
  Product.fetchAll(function (products) {
    filteredProducts = products.filter(function (product) {
      return product.name.toLowerCase().includes(search);
    });
    res.render('shop/index', {
      prods: filteredProducts,
      pageTitle: 'Search Results',
      path: '/'
    });
  });
};