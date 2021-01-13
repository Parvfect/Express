// views.js



/** Homepage view */
function home(res){
    res.render("index", { title: "Homepage" });
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
function stories(res){
    res.render("stories", { title: "stories" });
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
    admin : admin
};