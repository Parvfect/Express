
const {MongoClient} = require('mongodb');


const uri = '';
async function main(){
    
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        //await createCollection(client, "Stories");
        //await insertIntoCollection(client, "Stories", {name : 'The Bleeding Violin', summary:"", content:"", sno:1})
        //await findFromCollection(client, "Stories", "");
        console.log(listCollections(client));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

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