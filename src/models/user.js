const mongoose = require('mongoose');

const User = mongoose.model('users', {
  user: String,
  password: String,
  pageSelected: Number,
});

module.exports = User;
