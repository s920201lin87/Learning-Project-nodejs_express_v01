const express = require('express');

const app = express();
app.use(express.static(__dirname+"/public"))




app.listen(4567,()=>{
    console.log('server is runing')
})