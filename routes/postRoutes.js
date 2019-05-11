const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Post = mongoose.model('posts');

module.exports = app => {
  // GET all posts
  app.get('/api/posts', async (req, res) => {
    const posts = await Post.find({});

    res.send(posts);
  });

  // GET posts of current login user
  app.get('/api/posts/own', async (req, res) => {
    const posts = await Post.find({ 'author._user': req.user._id });

    res.send(posts);
  });

  // GET posts of given username
  app.get('/api/posts/username/:username', async (req, res) => {
    const { username } = req.params;
    const posts = await Post.find({ 'author.username': username });

    res.send(posts);
  });

  // GET a post of given id
  app.get('/api/posts/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);

    res.send(post);
  });

  // POST a new post
  app.post('/api/posts', async (req, res) => {
    console.log(req.body);
    const { title, body, tags } = req.body;
    const post = new Post({
      title,
      body,
      tags,
      author: {
        _user: req.user.id,
        username: req.user.id
      },
      createdAt: Date.now()
    });

    try {
      await post.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // DELETE a post
  app.delete('/api/posts/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    res.send(post);
  });
};
