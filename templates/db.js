
var MongoClient = require('mongodb');
var url = "mongodb+srv://berd:1234@cluster0.zwnic.mongodb.net/Berd?retryWrites=true&w=majority";
var mongoose = require('mongoose');

/** 
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err) console.log(err)
    else{
        console.log("I am connected?")
    }
});
*/
function connect(){
    MongoClient.connect(url, {useUnifiedTopology : true}, function(err, db){
        if(err) console.log(err);
        else{
            return db;
        }
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

function findFromCollection(database_name, collection, query){
    
    var db = connect();
    var result = db.db(database_name).collection(collection).findOne({}, function(err) {
        if (err) console.log(err)
        else{
            return result;
        }
    });
}

module.exports = {
    find : findFromCollection, 
    insert : insertIntoCollection, 
}