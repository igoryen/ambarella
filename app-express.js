// doesn't require an html page

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('app-express.js: Hello!');
});

app.listen(3001);

console.log('Server running at http://127.0.0.1:3001/');