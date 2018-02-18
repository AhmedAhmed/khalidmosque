const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: false,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  salt: {
    type: String,
    required: true,
    trim: true
  },
  roles: {
    type: String,
    required: true,
    enum: ['admin', 'editor', 'moderator', 'analyst', 'user'],
    default: 'user'
  }
},{minimize: false});

UserSchema.plugin(timestamps);
UserSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('User', UserSchema);