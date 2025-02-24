const express = require('express');


const app = express();


function checkCodeMiddleware(req,res,next){
    if(req.query.code === '521'){
        next();
    }else{
        res.send('error');
}}


app.get('/home',checkCodeMiddleware,(req,res)=> {
    res.send('前台首頁');
});

app.get('/admin',checkCodeMiddleware,(req,res)=> {
    res.send('後台首頁');
});
app.get('/setting',checkCodeMiddleware,(req,res)=>{
    res.send('設置頁面')
})

app.all('*',checkCodeMiddleware,(req,res)=>{
    res.StatusCode = 404;
    res.send('error 404')
});

app.listen(4001,()=>{
    console.log("server is runing")
});