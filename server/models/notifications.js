const mongoose = require("mongoose");
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const NotificationSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['generic','story', 'janazah', 'event', 'update'],
    required: true,
    trim: true,
    default: 'generic'
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: false
  },
  recipient: {
    type: String,
    required: true,
    trim: true
  },
  seen: {
    type: Boolean,
    required: true,
    default: false
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false
  }
});