
const mongoose = require('mongoose');
const uri = "mongodb+srv://berd:1234@cluster0.zwnic.mongodb.net/Berd?retryWrites=true&w=majority";
const story = require("./models/stories");

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("Connected succesfully!");

    

});
