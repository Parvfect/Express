"use strict";

// /models/impList.js
var mongoose = require('mongoose');

var impListSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: Boolean
});

impListSchema.methods.speak = function () {
  return this.name;
};

module.exports = mongoose.model('Impossible List', impListSchema);