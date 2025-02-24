const mongoose = require('mongoose');


let MovieSchema = new mongoose.Schema({
    title:String,
    director:String,
    author:String,
    price:Number
});

let MovieModel =  mongoose.model('Movies',MovieSchema);





module.exports = MovieModel;
