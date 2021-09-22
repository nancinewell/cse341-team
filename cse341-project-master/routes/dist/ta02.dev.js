"use strict";

//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
var express = require('express');

var router = express.Router();
var users = ['Peter', 'Joe', 'Glen'];
var message;
router.post('/addUser', function (req, res, next) {
  var nextUser = req.body.username;
  users.push(nextUser);
  res.redirect('/ta02/');
});
router.post('/removeUser', function (req, res, next) {
  var removeUser = req.body.removeusername;
  var index = users.indexOf(removeUser);

  if (index !== -1) {
    users.splice(index, 1);
  } else {
    message = "User not found";
  }

  res.redirect('/ta02/');
});
router.get('/', function (req, res, next) {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: 'ta02',
    // For pug, EJS
    activeTA03: true,
    // For HBS
    contentCSS: true,
    // For HBS
    users: users,
    message: message
  });
});
module.exports = router;