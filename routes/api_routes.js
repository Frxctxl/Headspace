const router = require('express').Router();

const user_controller = require('../controllers/user_controller');
const friend_controller = require('../controllers/friend_controller');
const thought_controller = require('../controllers/thought_controller');

router.get('/users', user_controller.getAllUsers);
router.get('/user', user_controller.getUser);
router.post('/user', user_controller.createUser);
router.put('/user', user_controller.updateUser);
router.delete('/user', user_controller.deleteUser);

router.post('/user/:userId/friends/:friendId', friend_controller.addFriend);
router.delete('/user/:userId/friends/:friendId', friend_controller.removeFriend);

router.get('/thoughts', thought_controller.getAllThoughts);
router.get('/thought', thought_controller.getThought);
router.post('/thought', thought_controller.createThought);

module.exports = router;
