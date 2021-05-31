var express = require('express');
var router = express.Router();
const users = require('../users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users', users: users });
});

module.exports = router;
