const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/home',(req,res)=> {
    res.send('前台首頁');
});

app.get('/admin',(req,res)=> {
    res.send('後台首頁');
});
app.get('/setting',(req,res)=>{
    res.send('設置頁面')
})

app.all('*',(req,res)=>{
    res.StatusCode = 404;
    res.send('error 404')
});

app.listen(4001,()=>{
    console.log("server is runing")
});
