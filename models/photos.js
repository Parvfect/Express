// /models/photos.js

const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name : String, 
    description : String,
    album : String, 
    slug : String
});

photoSchema.methods.speak = function () {
    return this.name;
}

module.exports = mongoose.model('Photos', photoSchema);