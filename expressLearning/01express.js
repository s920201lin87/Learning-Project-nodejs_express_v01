const express = require('express');
const fs = require('fs');
const path = require ('path');
app = express();
function recordMiddleware(req,res,next){
    let {url,ip} = req;
    fs.appendFileSync(path.resolve(__dirname, './access.log'),`${url} ${ip}127.0.0.1\r\n`);
    next();
}
app.use(recordMiddleware)

app.get('/home',(req,res)=> {
    
    res.send('前台首頁')

});
app.get('/admin',(req,res)=>{
    res.send('後台首頁');
})

app.all('*',(req,res)=>{
    res.StatusCode = 200;

})

app.listen(4001,()=>{
    console.log("server is runing")
})