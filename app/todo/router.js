var express = require('express');
var router = express.Router();
const {index, create, del, edit } = require('./controller')

/* GET home page. */
router.get('/', index);
router.post('/', create);
router.delete('/:id', del);
router.put('/:id', edit);

module.exports = router;
