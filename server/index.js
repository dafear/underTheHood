const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const jwt = require('jsonwebtoken');
const config = require('./config');

// API endpoints go here!
app.use(bodyParser.json());
mongoose.Promise = global.Promise;

const passRouter = require('./users/passRouter.js');
const {PORT, DATABASE_URL} = require('./config');

app.use(morgan('common'));

 app.use('/login', passRouter);
 app.use('/register', passRouter);
 app.use('/sessions', passRouter);

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

app.use('*', function(req, res) {
    return res.status(404).json({message: 'Not Found'});
   });


let server;
function runServer(databaseUrl=DATABASE_URL, port=PORT) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {

         if (err) {
            return reject(err);
         }
        server = app.listen(port, () => {
            resolve();
        })
        .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
      return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
     });
  });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
