var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// var logger = function(req,res,next){
// 	console.log('Logging...');
// 	next();
// }
// app.use(logger);


//View Engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));



//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//set static path
app.use(express.static(path.join(__dirname, 'public')));


// var person = [
// 	{
// 		name: 'Jeff',
// 		age: 30
// 	},
// 	{
// 		name: 'Sarah',
// 		age: 31
// 	}
// ]


app.get('/', function(req,res){
	res.render('index');
});


app.listen(3000, function(){
	console.log('Server started at 3000');
})