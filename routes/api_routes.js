const router = require('express').Router();

const user_controller = require('../controllers/user_controller');

router.get('/users', user_controller.getAllUsers);
router.post('/users', user_controller.createUser);

module.exports = router;
