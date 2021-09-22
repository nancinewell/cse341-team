//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = ['Peter', 'Joe', 'Glen'];
let message;
router.post('/addUser', (req, res, next) => {
  const nextUser = req.body.username;
  users.push(nextUser);
  res.redirect('/ta02/');
  });

  router.post('/removeUser', (req, res, next) => {
    const removeUser = req.body.removeusername;
    
    const index = users.indexOf(removeUser)
    if(index !== -1){
      users.splice(index, 1);
    } else {
       message = "User not found";
    }
    res.redirect('/ta02/');
    });

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: 'ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users,
    message: message
  });
});
module.exports = router;
