
// index.js

/**
 * Required External Modules
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const app = express();

/** Connection string to connect to mongodb (leave empty when pushing to git!!) */
const connectionstring = 'mongodb+srv://parvfect:raingryph456@cluster0.xzipi.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new MongoClient(connectionstring);


/** Stops all execution until this block is done */

try{

    await client.connect();
    await listDatabases(client);

}catch(e) {
    console.error(e);
}finally{
    await.client.close();
}



app.use(bodyParser.urlencoded({ extended: true }));

/** Connecting to mongodb */
MongoClient.connect(connectionstring, {
    useUnifiedTopology : true
}, (err, client) => {
    if(err) return console.error(err);
    console.log("Connection to database secured!");
    
    /** Naming the database */
    const db = client.db('berd');
    const Users = db.collection('Users');
    
    Users.insertOne("hola?")

    /** We need the db variable from the connection to to access MongoDB.
     *  This means we need to put our express request handlers into the MongoClient’s then call. */
    
     /** 
    app.post('/new_user', (req, res) => {
        Users.insertOne(req.body)
        .then(result => {
            console.log(result)
        })
        .catch(error => console.error(error))
    })
    */

    //app.use();
    //app.get();
    //app.post();
    //app.listen();
});


/**
 * App Variables
 */

/** If available process.env.Port else 8000 */
const port = "8003";

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



app.post('/new_user', (req, res) => {
    console.log("Helllooo new user!");    
    res.redirect("/imp")
})


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