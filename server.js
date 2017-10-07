var http = require('http');

var server = http.createServer(function(request, response){
	response.end('Donezo:', request.url);
});

server.listen(7000, function(err){
	if(err) throw err;
	console.log('you cool');
})

server.listen(7500, function(err){
	if(err) throw err;
	console.log('you suck');
})