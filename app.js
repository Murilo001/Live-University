var http = require('http');
var url = require('url');

http.createServer(onRequest).listen(3333);
console.log('Started');

function onRequest(request, response) {
	var pathNameme = url.parse(request.url).pathName;
	console.log('pathName' + pathName);
	showPage(response, pathname)
}

if(pathName === '/'){
  response.writeHead(200, {'Content-Type: 'text/html'})
  response.write(contentMap['/']);
  response.end();
 }else {
  response.writeHead(404, {'Content-Type: 'text/html'})
  response.write('404 Page not found');
  response.end();
}	

app.get('/', function(req, res) {
	res.send(index.html);
});

var server = app.listen(3333, function() {
	console.log("listening on port %d", server.address().port);
});