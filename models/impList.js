// /models/impList.js

const mongoose = require('mongoose');

const impListSchema = new mongoose.Schema({
    name : String, 
    description : String, 
    status : Boolean
});

impListSchema.methods.speak = function () {
    return this.name;
}

module.exports = mongoose.model('Impossible List', impListSchema);