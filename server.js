var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var logger = require("morgan");

var Article = require("./models/Article");
var db = require("./app/config/connection");

var app = express();

app.use(logger("dev"));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static("public"));
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//start app
var port = process.env.PORT || 3000;

app.listen(port, function()
{
  console.log('Running on port: ' + port);
});