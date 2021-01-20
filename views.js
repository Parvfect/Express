// views.js

const storyModel = require("./models/stories");
const impListModel = require("./models/impList");
const readingListModel = require("./models/readingList");
const photoModel = require("./models/projects");
const mongoose = require('mongoose');
const uri = "mongodb+srv://berd:1234@cluster0.zwnic.mongodb.net/Berd?retryWrites=true&w=majority";



mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("Connected succesfully!");
});

/** Homepage view */
function home(res){
    res.render("index", { title: "Homepage",  });
}

/** Impossible List view */
function impList(res){
    res.render("impossibleList", { title: "Impossible List" });
}

/** Reading list view */
function readingList(res){
    res.render("readingList", { title: "Reading List" });
}

/** Writings view */
function writings(res){
    res.render("writings", { title: "writings" });
}

/** Stories view */
async function stories(res){
    await storyModel.find(function(err, StoriesObject){
        if (err) console.error(err);
        res.render("stories", {Stories : StoriesObject})
    });
}

async function story(res, slug){
    StoryObject = await storyModel.find({slug : slug});
    res.render("stories", { title: "stories", name : StoryObject.name, content : StoryObject.content});
}

/** Explorations view */
function explorations(res){
    res.render("explorations", { title: "explorations" });
}

/** Admin view */
function admin(res){
    res.render("admin", { title: "admin" });
}

function photoAlbums(res){
    res.render("photoAlbums", { title: "photoAlbums" });
}

function photos(res){
    res.render("photos", { title: "photos" });
}

/** Making functions visible */
module.exports = {
    home : home, 
    impList: impList,
    readingList : readingList,
    writings : writings,
    stories: stories,
    explorations : explorations, 
    photoAlbums : photoAlbums, 
    photos : photos, 
    admin : admin, 
    story : story
};