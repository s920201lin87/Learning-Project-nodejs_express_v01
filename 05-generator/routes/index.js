var express = require('express');
var router = express.Router();

const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/portrait', function(req, res) {
  res.render('portrait');
});
router.post('/portrait', function(req, res) {
  const form = formidable({});

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields);
    console.log(files);
    res.send('ok')

    // res.json({ fields, files });
  });
});

module.exports = router;
