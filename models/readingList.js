// /models/readingList.js

const mongoose = require('mongoose');

const readingListSchema = new mongoose.Schema({
    name : String, 
    summary : String, 
    slug : String
});

readingListSchema.methods.speak = function () {
    return this.name;
}

module.exports = mongoose.model('Reading List', readingListSchema);