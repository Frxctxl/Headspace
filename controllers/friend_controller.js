const { User } = require('../models');

module.exports = {
  async addFriend(req, res) {
    const user = await User.findById(req.params.userId);

    user.friends.push(req.params.friendId);
    await user.save();

    res.json({
      message: 'Friend Added'
    })
  },
  async removeFriend(req, res) {
    const user = await User.findById(req.params.userId);
    user.friends.pull(req.params.friendId);

    await user.save();

    res.json({
      message: 'Friend Removed'
    })
  }
}
