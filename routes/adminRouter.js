const express = require('express')

const router = express.Router();

router.get('/admin',(req,res)=>{
    res.send('後台頁面')
});

router.get('/setting',(req,res)=>{
    res.send('設置頁面')
});

module.exports= router;