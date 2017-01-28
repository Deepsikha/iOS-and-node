/**
 * Created by lcom48 on 24/1/17.
 */
var  express = require('express')
    ,bodyParser = require('body-parser')
    ,app = express()
    ,multer  =  require('multer')
    ,binary = require('binary')
    ,fs = require('fs')
    ,util= require('util')
    ,http = require('http')
    ,multer = require('multer')
    ,upload = multer({ dest: './multer' });

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies.
app.use(bodyParser.json({limit: '5mb'}));


songs = require('./route');

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});

app.post('/upload',songs.upload);