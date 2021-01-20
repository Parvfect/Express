"use strict";

// /models/projects.js
var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  name: String,
  content: String,
  slug: String
});

projectSchema.methods.speak = function () {
  return this.name;
};

module.exports = mongoose.model('Projects', projectSchema);