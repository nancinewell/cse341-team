const request = require("request");

const url="https://byui-cse.github.io/cse341-course/lesson03/items.json";  

const fetchAll = cb => {
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

exports.fetchAll = fetchAll;