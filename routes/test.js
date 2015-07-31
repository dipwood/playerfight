var express = require('express');
var router = express.Router();

/* test */
router.get('/', function(req, res, next) 
	{
	res.render('test', { title: 'test' })
	})

module.exports = router;
