
/**
 * @param {*} success
 * @param {*} error
*/
module.exports = function(success,error){
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/mongooseCollection')

    mongoose.connection.once('open',()=>{
        success();
        console.log('連接mongodb........');
    });

    mongoose.connection.on('error',()=>{
        error();
        console.log('連接錯誤........!!!!!');
    });
    
    mongoose.connection.on('close',()=>{
        console.log('connection close......')
    });
}

