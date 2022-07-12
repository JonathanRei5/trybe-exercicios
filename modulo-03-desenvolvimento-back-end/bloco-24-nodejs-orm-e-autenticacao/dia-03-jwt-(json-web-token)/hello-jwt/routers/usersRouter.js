const { Router } = require('express');
const { auth } = require('../middlewares');
const { usersController } = require('../controllers');

const router = Router();

router.use(auth.validateToken);
router.get('/me', usersController.getUserAuthorization);

module.exports = router;
