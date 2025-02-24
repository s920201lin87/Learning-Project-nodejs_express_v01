const db = require('./db/db');
const mongoose = require('mongoose');

db(()=>{
    console.log('連接mongodb........');

    let BookSchema = new mongoose.Schema({
        name:String,
        author:String,
        price:Number
    });

    let BookModel =  mongoose.model('books',BookSchema);

    BookModel.create({
        name:'Java11程式設計',
        author:'陳錦輝',
        price:698
    },(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log(data)
        }
    })
},()=>{
    console.log('連接失敗')
});






