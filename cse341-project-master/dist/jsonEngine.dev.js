"use strict";

var request = require("request");

var url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

var fetchAll = function fetchAll(cb) {
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

exports.fetchAll = fetchAll;