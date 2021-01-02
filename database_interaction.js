const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://parvfect:raingryph456@cluster0.xzipi.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new MongoClient(uri);
const readline = require("readline"); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/** Imports database! Hello modular programming. */
var database = require('./database');

var collections = ["Stories", "Books", "ImpList", "Users"];    
var actions = ["AddItem", "DisplayItem/s", "DeleteItem", "DeleteCollection"]
/** So basically choose a collection from the collections */
for(var i = 0; i < collections.length; i++)
{
    console.log(collections[i]);
}

rl.question("Enter collection to be selected", function(collectionChoice){
    
    for(var i = 0; i < actions.length; i++)
    {
        console.log(actions[i]);
    }
    
    rl.question("Choose action ", function(actionChoice){
        switch(actionChoice){
            case 1:
                rl.question("Enter data")
                database.insertIntoCollection(client, collectionChoice, )
        }
    })
})  


/** Choose what to do with it */

/** Do the required operation */
