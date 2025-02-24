const express = require('express');

const app = express();

app.use(express.static(__dirname + '/test'));

app.listen(6543,()=>{
    console.log('server is  runing !!!')
})