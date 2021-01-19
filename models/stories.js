// /models/stories.js

const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    name : String, 
    summary : String, 
    content : String, 
    display : Boolean, 
    slug : String
});

storySchema.methods.speak = function () {
    return this.name;
}

module.exports = mongoose.model('Story', storySchema);