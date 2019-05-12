const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  // GET all users
  app.get('/api/users', async (req, res) => {
    const users = await User.find({});

    res.send(users);
  });

  // GET current user
  app.get('/api/users/own', async (req, res) => {
    res.send(req.user);
  });

  // PATCH current user
  app.patch('/api/users/own', async (req, res) => {
    const { username, firstName, lastName } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { username, firstName, lastName }
    );

    await user.save();
    res.send(user);
  });
};
