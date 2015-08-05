var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

mongoose.connect('mongodb://localhost/players');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) 
	{
  	// yay!
	});
/*
var PlayerSchema = mongoose.Schema
  , ObjectId = Schema.ObjectId;
 

var BlogPost = new Schema({
    author    : ObjectId
  , title     : String
  , body      : String
  , date      : Date
});


var Player = new PlayerSchema(
	{
    name : String
	team : String,
	stats     : {Luck: Number, Macro: Number}
	);
*/

var PlayerSchema = new mongoose.Schema(
	{
	name : String,
	team : String,
	stats : {Luck: Number, Macro: Number}
  	)

module.exports = mongoose.model('Player', PlayerSchema);
db.close();