var express = require('express');
var router = express.Router();
const users = require('../users');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send(users);
});

module.exports = router;
