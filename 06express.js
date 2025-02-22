const express = require('express');

const app = express();
//中間件
app.use((req,res,next)=>{
    //檢測請求標頭是否為127.0.0.1
    let referer = req.get('referer');
    //獲得 referer
    if (referer){
        console.log(referer);
        let url = new URL(referer);
        let hostname = url.hostname;
        //獲得 hostname
        console.log(hostname);
        if(hostname !== '127.0.0.1'){
            res.status(404).send('<h1>404 not found</h1>');
            return;
        }
    }
    next();  
    
});
//靜態資源 中間件
app.use(express.static(__dirname+'/public'));

app.listen(4455,()=>{
    console.log('server is running')
})

