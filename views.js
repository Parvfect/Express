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
async function home(res){
    res.render("index", { title: "Homepage",  });
}

/** Impossible List view */
async function impList(res){
    await impListModel.find(function(err, imp){
        if (err) console.error(err);
        res.render("impossibleList", {imp : imp });
    });
}

/** Reading list view */
async function readingList(res){
    await readingListModel.find(function(err, rl){
        if (err) console.error(err);
        res.render("readingList", {rl : rl });
    });
}

/** Writings view */
async function writings(res){
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
    await storyModel.find({slug : "violin"}, function(err, story){
        if (err) console.error(err);
        console.log(story.name);
        res.render("StoryTemplate", {name : story.name, content : story.content})
    });
}

/** Explorations view */
async function explorations(res){
    res.render("explorations", { title: "explorations" });
}

/** Admin view */
async function admin(res){
    res.render("admin", { title: "admin" });
}

async function photoAlbums(res){
    res.render("photoAlbums", { title: "photoAlbums" });
}

async function photos(res){
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