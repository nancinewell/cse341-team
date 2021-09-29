"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var path = require('path');

var request = require("request"); // const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );


var url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

var getProductsFromFile = function getProductsFromFile(cb) {
  request({
    url: url,
    json: true
  }, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      cb(body);
    } else {
      console.log("Error: ".concat(err));
    }
  });
};

module.exports =
/*#__PURE__*/
function () {
  function Product(tags, imageUrl, price, name, description) {
    _classCallCheck(this, Product);

    this.tags = tags;
    this.imageUrl = imageUrl;
    this.price = price;
    this.name = name;
    this.description = description;
  }

  _createClass(Product, null, [{
    key: "fetchAll",
    value: function fetchAll(cb) {
      getProductsFromFile(cb);
    }
  }]);

  return Product;
}();