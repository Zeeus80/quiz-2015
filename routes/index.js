var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
//  res.render('index', { title: 'Express' });  Cambio Primera pagina
  res.render('index', { title: 'Quiz' });  // Cambio primera pagina
});

module.exports = router;
