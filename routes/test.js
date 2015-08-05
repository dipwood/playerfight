var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

/* test */
router.get('/', function(req, res, next) 
	{
	/*
	mongoose.connect('mongodb://localhost/kitties');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
  	// yay!
	});

	var kittySchema = mongoose.Schema({
    name: String
	});

	// NOTE: methods must be added to the schema before compiling it with mongoose.model()
	kittySchema.methods.speak = function () 
		{
  		var greeting = this.name
    	? "Meow name is " + this.name
    	: "I don't have a name";
  		console.log(greeting);
		}

	var Kitten = mongoose.model('Kitten', kittySchema);

	var silence = new Kitten({ name: 'Silence' });
	console.log(silence.name); // 'Silence'

	var fluffy = new Kitten({ name: 'fluffy' });
	fluffy.speak(); // "Meow name is fluffy"

	/* for later http://mongoosejs.com/docs/

	fluffy.save(function (err, fluffy) {
 	if (err) return console.error(err);
  	fluffy.speak();
	});

	Kitten.find(function (err, kittens) {
  	if (err) return console.error(err);
  	console.log(kittens);
	})

	db.close();
	*/
	res.render('test', { title: 'test' })
	})

module.exports = router;
