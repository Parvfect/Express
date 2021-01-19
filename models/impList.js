const { Int32 } = require('mongodb');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ImpListSchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 100},
    status: {type: Boolean, required: true},
    //subsequent: {type: ImpListSchema},
  }
);


ImpListSchema
.virtual('Name')
.get(function () {
  return this.name;
});

ImpListSchema
.virtual('Status')
.get(function () {
  return this.status;
});

/*
ImpListSchema
.virtual('subsequent')
.get(function () {
  return this.subsequent;
});
*/

ImpListSchema
.virtual('number')
.get(function () {
  return this.number;
});


//Export model
module.exports = mongoose.model('ImpList', ImpListSchema);
