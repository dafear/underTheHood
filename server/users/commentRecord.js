const mongoose = require('mongoose');
const db = require('./db');
mongoose.createConnection("mongodb://dafear:sidney12@ds115035.mlab.com:15035/underthehood");
  

  const resultSchema = mongoose.Schema ({
  
       lat: String,
       lng: String,
       
   });

const searchRecordSchema = mongoose.Schema({
  
     
     userEmail: {type: String, required: true},
     comments: {type: String, required: true},
     results: [resultSchema],
     

  
  
  });


searchRecordSchema.methods.apiRepr = function() {

  return {
   
     
     userEmail: {type: String, required: true},
     comments: {type: String, required: true},
     results: [resultSchema],
    

   
    
  };
};


const searchRecord = mongoose.model('commentRecord', commentRecordSchema);

module.exports = { commentRecord };