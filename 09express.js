const express = require('express');
const path = require('path')
const app = express();

app.set('view engine','ejs');
//設置模板文件
app.set('views',path.resolve(__dirname, './views'));

app.get('/home',(req,res)=>{
    let title = '林董有槍！！！！';
    res.render('home',{title});

})


app.listen(7766,()=>{
    console.log('server is runing')
})