var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var db = require ("../app/config/connection");


var ArticleSchema = new Schema ({
    title: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: true
    }, 
    date: {
        type: Date, 
        required: true
    },
    saved: {
        type: Boolean,
        default: 0
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;