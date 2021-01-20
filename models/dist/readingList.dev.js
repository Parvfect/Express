"use strict";

// /models/readingList.js
var mongoose = require('mongoose');

var readingListSchema = new mongoose.Schema({
  name: String,
  summary: String,
  slug: String
});

readingListSchema.methods.speak = function () {
  return this.name;
};

module.exports = mongoose.model('Reading List', readingListSchema);