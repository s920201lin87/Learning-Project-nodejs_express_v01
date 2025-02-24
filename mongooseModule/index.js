const db = require('./db/db');
const mongoose = require('mongoose');
const BookModel = require('./models/BookModel')
const MovieModel = require('./models/MovieModel')
const {DBhost,DBname,DBport} = require('./config')
db(()=>{
    console.log('連接mongodb........');

    
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
    MovieModel.create({
        title:'無間道',
        director:'劉偉強',
        author:'劉偉強',
        price:298
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






