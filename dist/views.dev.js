"use strict";

// views.js
var storyModel = require("./models/stories");

var impListModel = require("./models/impList");

var readingListModel = require("./models/readingList");

var photoModel = require("./models/projects");

var mongoose = require('mongoose');

var uri = "mongodb+srv://berd:1234@cluster0.zwnic.mongodb.net/Berd?retryWrites=true&w=majority";
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
/** Homepage view */

function home(res) {
  res.render("index", {
    title: "Homepage"
  });
}
/** Impossible List view */


function impList(res) {
  res.render("impossibleList", {
    title: "Impossible List"
  });
}
/** Reading list view */


function readingList(res) {
  res.render("readingList", {
    title: "Reading List"
  });
}
/** Writings view */


function writings(res) {
  res.render("writings", {
    title: "writings"
  });
}
/** Stories view */


function stories(res) {
  return regeneratorRuntime.async(function stories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(storyModel.find(function (err, StoriesObject) {
            if (err) console.error(err);
            res.render("stories", {
              Stories: StoriesObject
            });
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function story(res, slug) {
  return regeneratorRuntime.async(function story$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(storyModel.find({
            slug: slug
          }));

        case 2:
          StoryObject = _context2.sent;
          res.render("stories", {
            title: "stories",
            name: StoryObject.name,
            content: StoryObject.content
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}
/** Explorations view */


function explorations(res) {
  res.render("explorations", {
    title: "explorations"
  });
}
/** Admin view */


function admin(res) {
  res.render("admin", {
    title: "admin"
  });
}

function photoAlbums(res) {
  res.render("photoAlbums", {
    title: "photoAlbums"
  });
}

function photos(res) {
  res.render("photos", {
    title: "photos"
  });
}
/** Making functions visible */


module.exports = {
  home: home,
  impList: impList,
  readingList: readingList,
  writings: writings,
  stories: stories,
  explorations: explorations,
  photoAlbums: photoAlbums,
  photos: photos,
  admin: admin,
  story: story
};