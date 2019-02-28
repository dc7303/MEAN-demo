var router = require('express').Router();
var boardMiddle = require('../middleware/board');

router.post('/insert', boardMiddle.boardInsert);

module.exports = router;
