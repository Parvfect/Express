"use strict";

// /models/photoAlbums.js
var mongoose = require('mongoose');

var photoAlbumSchema = new mongoose.Schema({
  name: String,
  description: String,
  slug: String
});

photoAlbumSchema.methods.speak = function () {
  return this.name;
};

module.exports = mongoose.model('Photo Albums', photoAlbumSchema);