const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  author: {
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    username: String
  },
  createdAt: Date,
  editedAt: Date
});

mongoose.model('posts', postSchema);
