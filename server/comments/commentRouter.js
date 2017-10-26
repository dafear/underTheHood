const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/', (req, res) => {
  const comments = [
    {lat: 40.7589, lng: 73.9851, text: 'Woow'},
    {lat: 40.7314163, lng: -73.9991735, text: 'Test comment'}
  ]

  res.json(comments)
});

router.post('/', (req, res) => {
  console.log(req.body)

  // you need to save data
  // return all comments
});


module.exports = router;
