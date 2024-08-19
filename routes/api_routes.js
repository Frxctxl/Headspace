const router = require('express').Router();

const user_controller = require('../controllers/user_controller');

router.get('/users', user_controller.getAllUsers);
router.get('/user', user_controller.getUser);
router.post('/user', user_controller.createUser);
router.put('/user', user_controller.updateUser);
router.delete('/user', user_controller.deleteUser);

module.exports = router;
