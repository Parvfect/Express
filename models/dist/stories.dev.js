"use strict";

// /models/stories.js
var mongoose = require('mongoose');

var storySchema = new mongoose.Schema({
  name: String,
  summary: String,
  content: String,
  display: Boolean,
  slug: String
});

storySchema.methods.speak = function () {
  return this.name;
};

module.exports = mongoose.model('Story', storySchema);