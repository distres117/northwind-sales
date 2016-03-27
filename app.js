var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    routes = require('./routes');

app.use(require('serve-favicon')(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(require('morgan')('dev'));
app.use(express.static('public'));
app.use('/api', routes);

app.use(function(req,res,next){
   var error = new Error("404 Page not found");
   error.status = 404;
   next(error);
});

app.use(function(err,req,res){
   console.log(err);
   res.json(err);
});


module.exports = app;
