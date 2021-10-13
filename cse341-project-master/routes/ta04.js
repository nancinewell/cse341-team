//TA04 PLACEHOLDER
const express = require('express');
const session = require('express-session');
const router = express.Router();

router.get('/', (req, res, next) => {
  if(!req.session.style){
    req.session.style = "Light";
    req.session.counter = 0;
  }
  res.render('pages/ta04', {
    title: 'Team Activity 04',
    path: '/ta04', // For pug, EJS
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS
    style: req.session.style,
    counter: req.session.counter
  });
  console.log(req.session.style);
});

router.get('/reset', (req, res, next) => {
    req.session.destroy(err => {
      console.log(err);
    });
    res.redirect('/ta04');
})

router.post('/change-style', (req, res, next) => {
  const style = req.body.style;
  req.session.style = style;
  res.redirect('/ta04');
})

router.post('/counter', (req, res, next) => {
  const counter = parseInt(req.body.counter);
  req.session.counter += counter;
  console.log(req.session.counter);
  res.redirect('/ta04');
})

module.exports = router;
