var express = require( "express" ),
    nunjucks = require( "nunjucks" ),
    path = require( "path" ),
    app = express(),
    nunjucksEnv = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, '/public' )));

nunjucksEnv.express( app );

app.get('/', function(req, res){
    res.render( "render.html", { hello: "app-render.js: Hello!"});
});

app.listen(3003);

console.log('Server running at http://127.0.0.1:3003/');