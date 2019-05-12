const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  githubId: String,
  facebookId: String,
  username: String,
  firstName: String,
  lastName: String
});

mongoose.model('users', userSchema);
