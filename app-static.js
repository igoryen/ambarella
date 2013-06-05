var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));  //1

app.listen(3002);

console.log('Server running at http://127.0.0.1:3002/');


/*
==========================================
1) go to the public directory, look for index.html, and display it

*/