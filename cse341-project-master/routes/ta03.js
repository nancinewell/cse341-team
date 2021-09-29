//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const Product = require('../jsonEngine');

router.post('/search', (req, res, next) => {
  const search = req.body.search.toLowerCase();
  let filteredProducts = [];
  console.log("Searched");
  Product.fetchAll(products => {
      filteredProducts = products.filter( product => product.name.toLowerCase().includes(search));
      res.render('pages/ta03', {
      prods: filteredProducts,
      title: 'Search Results',
      path: '/'
    });
  });
});

router.get('/', (req, res, next) => {
  Product.fetchAll(products => {
    res.render('pages/ta03', {
      prods: products,
      title: 'Products',
      path: '/'
    });
  });
});

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
