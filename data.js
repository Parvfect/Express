
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://Parv:pasta@cluster0.zwnic.mongodb.net/Berd?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("Connection succesful!");