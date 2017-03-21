var restify = require('restify');
var db = require('./db');
var banner = require('./routes/index');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
}

var server = restify.createServer();
// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);

banner(server);
db();

server.listen(3900, function () {
    console.log('%s listening at %s', server.name, server.url);
}); 



