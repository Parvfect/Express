"use strict";

var mongoose = require('mongoose');

var uri = "mongodb+srv://berd:1234@cluster0.zwnic.mongodb.net/Berd?retryWrites=true&w=majority";

var story = require("./models/stories");

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("Connected succesfully!");
});