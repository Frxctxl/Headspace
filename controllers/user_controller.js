const { User } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    const users = await User.find();

    res.json(users)
  },

  async createUser(req, res) {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email
    });

    res.json({
      message: 'Done',
      user: newUser
    });
  }
}
