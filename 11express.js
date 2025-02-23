const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/mongoCollection')


mongoose.connection.once('open',()=>{
    console.log('連接mongodb........');
    let bookSchema = new mongoose.Schema({
        name:String,
        author:String,
        price:Number,
        is_hot:Boolean,
        pub_time:Date
    })
    //
    let booksModel = mongoose.model('books',bookSchema);
    booksModel.create({
        name : '被討厭的勇氣',
        author : '白癡',
        price : 111.21,
        is_hot:true,
        pub_time: new Date()
    },(err,data) => {
        if(err){
            console.log(err)
            return;
        }
        console.log(data);
        
    });
});



mongoose.connection.on('error',()=>{
    console.log('連接錯誤........!!!!!');
});
mongoose.connection.on('close',()=>{
    console.log('connection close......')
});

