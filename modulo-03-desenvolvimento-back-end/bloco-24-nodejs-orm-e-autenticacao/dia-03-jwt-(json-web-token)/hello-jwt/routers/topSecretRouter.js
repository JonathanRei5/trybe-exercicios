const { Router } = require('express');
const { auth } = require('../middlewares');
const { topSecretController } = require('../controllers');

const router = Router();

router.use(auth.validateToken);
router.get('/', topSecretController.getSecret);

module.exports = router;
