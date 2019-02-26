var router = require('express').Router();
var authMiddle = require('../middleware/auth');


/** login */
router.post('/signIn', authMiddle.signIn);

router.post('/signUp', authMiddle.signUp);

module.exports = router;
