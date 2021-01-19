
var MongoClient = require('mongodb');
var url = "mongodb+srv://berd:1234@cluster0.zwnic.mongodb.net/Berd?retryWrites=true&w=majority";
const mongoose = require('mongoose');


function connect(){
    
    mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log("Connected succesfully!")
    });
}


function createCollection(db, database_name, collection_name){
    
    db.db(database_name).createCollection(collection_name, function(err){
        if(err) console.log(err);
        else{
            console.log("Collection added");
        }
    });
}

function insertIntoCollection(db, database_name, collection, item){
    
    db.db(database_name).collection(collection).insertOne(item, function(err){
        if (err) console.log(err)
        else{
            console.log("Item added");
        }
    });
}

async function findFromCollection(database_name, collection, query){
    
    var db = connect();
    await db.db(database_name).collection(collection).find(query).toArray(function(err, result) {
        if (err) console.log(err)
        else{
            console.log(result);
            result_actual = result;
        }
    });
    
    return result_actual;
}

module.exports = {
    find : findFromCollection, 
    insert : insertIntoCollection, 
    connect : connect
}