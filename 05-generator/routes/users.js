var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/user',(req,res)=>{
  res.send('11111111111111111111111111111')
})
module.exports = router;
