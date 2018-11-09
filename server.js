var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+'/public/dist/public'));

app.use(bodyParser.json());



var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
    console.log('on port 8000');
})