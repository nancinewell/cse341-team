const fs = require('fs');
const path = require('path');
const request = require("request");

const url="https://byui-cse.github.io/cse341-course/lesson03/items.json";  

const getProductsFromFile = cb => {
    request({
        url: url,
        json: true
    }, function (err, res, body) {
    
        if (!err && res.statusCode === 200) {
            cb(body);
        } else {
            console.log(`Error: ${err}`)
        }
    })
    
      }
    


module.exports = class Product {
    constructor(tags, imageUrl, price, name, description) {
      this.tags = tags;
      this.imageUrl = imageUrl;
      this.price = price;
      this.name = name;
      this.description = description;
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
      }


}