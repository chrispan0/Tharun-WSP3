//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");
/* Changed Author into a Number */
let bookModel = mongoose.Schema({
    Name: String,
    Author: Number,
    Published: String,
    Description: String,
    Price: String
},
{
    collection:"Bio_books"
});
module.exports =mongoose.model('Book',bookModel);
