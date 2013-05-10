var express = require('express');

function start(route, handle){
	var app = express();
	app.use(express.logger());

	app.get('/' , function(req, res){
		route(handle, '/', res);
	});

	app.get('/map', function(req, res){
		route(handle, '/map', res);
	});

	app.use(express.static('./frontend'));
	app.use(express.static('./data'));

	var port = process.env.PORT || 3000;
	app.listen(port);
	console.log('Listening on port ' + port);
}

exports.start = start;	
