// urls.js


const views = require('./views');

function main(app){

    app.get("/", (req, res) => {

        views.home(res);
    });
    
    app.get("/impossibleList", (req, res) => {
    
        views.impList(res);
    });
    
    app.get("/readingList", (req, res) => {
    
        views.readingList(res);
    });

    app.get("/writings", (req, res) => {
    
        views.writings(res);
    });

    app.get("/stories", (req, res) => {
    
        views.stories(res);
    });
    
    app.get("/explorations", (req, res) => {
    
        views.explorations(res);
    });
    
    app.get('/admin', (req, res) => {
        
        views.admin(res);
    })

    app.get('/photoAlbums', (req, res) => {
        
        views.photoAlbums(res);
    })

    /** Need to be careful here, each album will have a different uid */
    app.get('/photos', (req, res) => {
        
        views.photos(res);
    })

    app.get('/stories/*', (req, res) => {
        var slug = req.url.slice(9);
        views.story(res, slug);
    })
}


/** Making functions visible to other files */
module.exports = {
    main : main
};