var express = require('express');
var router = express.Router();

// GET handler for the game.
router.get('/', function(req, res, next) 
	{
	var name = req.params.name;
	res.render('partials/' + name);
	})

module.exports = router;