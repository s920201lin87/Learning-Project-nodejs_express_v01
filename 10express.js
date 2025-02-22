const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongooseCollection')

mongoose.connection.on('open',()=>{
    console.log('連接mongodb........');
});
mongoose.connection.on('error',()=>{
    console.log('連接錯誤........!!!!!');
});
mongoose.connection.on('close',()=>{
    console.log('connection close......')
});
setTimeout(()=>{
    mongoose.disconnect();
},2000);

