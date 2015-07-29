var express = require('express');
var router = express.Router();

// GET handler for the game.
router.get('/', function(req, res, next) 
	{
	res.render('game', { title: 'SC2 Manager' , username: req.session.username})
	})

// POST handler for the game. currently unused
router.post('/game', function(req, res, next) 
	{
	res.render('game', { title: 'SC2 Manager' , username: req.session.username})
	})

module.exports = router;