const express = require('express');
const bodyParser =require('body-parser') 

const app = express();
//解析JSON 格式的請求體的中間件
const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })




app.get('/login',(req,res)=>{
    // res.send('表單頁面')
    res.sendFile(__dirname+'/index.html')
})
app.post('/login',urlencodedParser,(req,res)=>{
    res.send('get member info')
    console.log(req.body);
})

app.listen(3321,()=>{
    console.log('server is runing~~')
})