// /models/readingList.js


const readingListSchema = new mongoose.Schema({
    name : String, 
    summary : String, 
    slug : String
});

storySchema.methods.speak = function () {
    return this.name;
}

module.exports = mongoose.model('Reading List', readingListSchema);