const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const morgan = require('morgan');
const http = require('http');
const config = require('../config');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const request = require('request');

mongoose.Promise = global.Promise;


router.use(bodyParser.urlencoded({ extended: false, 
  parameterLimit: 1000000}));

 
router.use(bodyParser.json());
 router.use(methodOverride());



const {searchRecord} = require('./commentRecord.js')




  router.post('/comments', jsonParser, (req, res) => {

  const requiredFields = ['lat', 'lng'];
  const venues = req.body.lat.lng;
  const comments = req.body.comments;
  const email = req.body.userEmail;
  var search = new searchRecord({
    comments: comments,
    userEmail: email,
    results: venues
  });
 
    
     search.save(function (err) {
      
       console.log(err);     

     });

  
     res.send(JSON.stringify('ok'));
   });

    
  



   











module.exports = router;