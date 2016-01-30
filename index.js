var http = require('http');
var path = require('path');
var browserify = require('browserify');
var sass = require('node-sass')
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  response.render('index');
});

// For now, recompile on every request for generated static assets
app.get('/js/app.js', function(request, response) {
  var b = browserify({ debug: true });
  b.add('./browser/js/index.js');
  b.bundle(function(err, js) {
    response.type('application/javascript');
    response.send(js);
  });
});

app.get('/styles/app.css', function(request, response) {
  sass.render({
    file: './browser/sass/main.scss'
  }, function(err, result) {
    response.type('text/css');
    response.send(result.css);
  });
});

var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Express server started on *:' + port);
});
