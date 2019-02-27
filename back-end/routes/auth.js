var router = require('express').Router();
var authMiddle = require('../middleware/auth');


/** login */
router.post('/signIn', authMiddle.signIn);

router.post('/signUp', authMiddle.signUp);

router.get('/userAll', authMiddle.userFindAll);

router.get('/userDelete', authMiddle.userDelete);

module.exports = router;
