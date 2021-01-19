
// index.js

/**
 * Required External Modules
 */

const express = require('express');
const path = require('path');
const app = express();
const urls = require('./urls');
const imp = require("./models/impList");


/** If available process.env.Port else 8000 */
const port = "8003";

/**
 *  App Configurations - analogous to settings.py
 */

/** Routes to our template folder */
app.set("views", path.join(__dirname, "templates"));

/** Sets the template engine as pug */
app.set("view engine", "pug")

/** Static file serving */
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions - analogous to urls.py
 */

urls.main(app);

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