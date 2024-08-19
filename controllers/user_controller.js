const { User } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    const users = await User.find();

    res.json(users)
  },

  async getUser(req, res) {
    const user = await User.findById(req.body.userId);

    res.json({
      user: user
    })
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
  },

  async updateUser(req, res) {
    const updatedUser = await User.updateOne({
      _id: req.body.userId
    }, {
      username: req.body.username,
      email: req.body.email
    })

    res.json({
      message: 'Done',
      user: updatedUser
    })
  },

  async deleteUser(req, res) {
    await User.deleteOne({
      _id: req.body.userId
    });

    res.json({
      message: 'Done'
    })
  },
}
