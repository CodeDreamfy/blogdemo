var express = require('express');
var router = express.Router();

router.get('/users/:id', function(req, res){
  res.send('hello users')
})

module.exports = router;