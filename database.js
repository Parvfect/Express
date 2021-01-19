
const http = require('http');

const url = 'mongodb+srv://parvfect:raingryph456@cluster0.xzipi.mongodb.net/Berd?retryWrites=true&w=majority';

//Import the mongoose module
var mongoose = require('mongoose');

var MongoClient = require('mongodb').MongoClient;

var str = "";

function main(){
    

    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

    //Get the default connection
    var db = mongoose.connection;
    
    var Schema = mongoose.Schema;

    var SomeModelSchema = new Schema({
    name: String,
    });    

    // Compile model from schema
    var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
    
    var instance = new SomeModel({name : "Parv"});

    instance.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });

    SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
        if (err) return handleError(err);
        conosle.log("Saved")
    });
    
    var query = SomeModel.find({ "name" : "Parv"})
    
}
    

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function createCollection(client, collection){

    client.db().createCollection(collection, function(err, res){
            if (err) throw err;
            console.log("Collection created");
    });
}
 
async function insertIntoCollection(client, collection, data){

    const result = await client.db().collection(collection).insertOne(data);
    console.log('Data added to database id: ${result.insertId} ');
}

async function findFromCollection(client, collection, data){
    const result = await client.db().collection(collection).findOne({}, function(err, result){
        if(err) throw err;
        console.log(result.name);
        return result;
    });
}

async function listCollections(client){
    return client.db().listCollections().toArray();
}

module.exports = {
    main : main,
    listCollections : listCollections,
    insertIntoCollection : insertIntoCollection
};