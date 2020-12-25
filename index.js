
// index.js

/**
 * Required External Modules
 */

const express = require('express');
const path = require('path');


/**
 * App Variables
 */

const app = express();

/** If available process.env.Port else 8000 */
const port = "8001";

/**
 *  App Configurations - analogous to settings.py
 */

/** Routes to our template folder */
app.set("views", path.join(__dirname, "views"));

/** Sets the template engine as pug */
app.set("view engine", "pug")

/** Static file serving */
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions - analogous to urls.py
 */

app.get("/", (req, res) => {

    /** Basically controls the page rendered and its header */
    res.render("index", { title: "Homepage" });
});

app.get("/impossibleList", (req, res) => {

    /** Basically controls the page rendered and its header */
    res.render("impossibleList", { title: "Impossible List" });
});


/**
 * Server Activation
 */

app.listen(port, function(error){
   
    if(error){
        console.log("Something went wrong ! " + error);
   
    }else{
        console.log("Listening to requests on  http://localhost:${port}");
    }
});