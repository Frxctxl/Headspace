const { Thought } = require('../models');

module.exports = {
  async getAllThoughts(req, res) {
    const thoughts = await Thought.find();

    res.json(thoughts)
  },

  async getThought(req, res) {
    const thought = await Thought.findById(req.body.thoughtId);

    res.json({
      thought: thought
    })
  },

  async createThought(req, res) {
    const newThought = await Thought.create({
      username: req.body.username,
      thoughtText: req.body.thoughtText
    });

    res.json({
      message: 'Done',
      thought: newThought
    });
  },
}
