"use strict";

// /models/photos.js
var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  name: String,
  description: String,
  album: String,
  slug: String
});

photoSchema.methods.speak = function () {
  return this.name;
};

module.exports = mongoose.model('Photos', photoSchema);