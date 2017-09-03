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

//set up express routes
app.get("/", function(req, res){
    res.sendFile("./public/index.html");
});

//get any saved in db
app.get("/api/saved", function(req, res){
    Article.find({}, function(error, doc){
        if (error) {
            console.log(error);
        } else {
            res.send(doc);
        }
    })
});

//add to saved in db
app.post("/api/saved", function(req, res){
    var newArticle = new Article ({
        title: req.body.title,
        link: req.body.link,
        date: req.body.date
    });

    newArticle.save(function(error, doc){
        if (error) {
            console.log(error);
        } else {
            res.json(doc);
        }
    })
});

//remove article from saved
app.delete("/api/saved/:id", function(req, res){
    Article.findByIdAndRemove(req.params.id, function(error, doc){
        if (error) {
            console.log(error);
        } else {
            res.send(doc);
        }
    })
});


app.listen(port, function()
{
  console.log('Running on port: ' + port);
});