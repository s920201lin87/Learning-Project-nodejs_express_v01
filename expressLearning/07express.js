const express = require('express');
const homeRouter = require('../routes/homeRouter')
const adminRouter = require('../routes/adminRouter')
const app = express();


app.use(homeRouter);
app.use(adminRouter);


app.all("*",(req,res)=>{
    res.send('<h1>404 Not Found</h1>')
})


app.listen(6677,()=>{
    console.log('server is runing!!')
})