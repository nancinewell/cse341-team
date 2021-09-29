const Product = require('../models/product');


exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Vikingware Shop',
        path: '/'
      });
    });
  };

  exports.postSearch = (req, res, next) => {
    const search = req.body.search.toLowerCase();
    let filteredProducts = [];
    Product.fetchAll(products => {
        filteredProducts = products.filter( product => product.name.toLowerCase().includes(search));
        res.render('shop/index', {
        prods: filteredProducts,
        pageTitle: 'Search Results',
        path: '/'
      });
    });
  };