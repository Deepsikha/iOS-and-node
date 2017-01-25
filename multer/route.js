/**
 * Created by lcom48 on 24/1/17.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb'); // connect to our database
var Stud = require('./stud');
// /var uri = "mongodb://1111:1111@ds061365.mongolab.com:61365/aweitest";
//mongoose.connect(uri);
//// we're connected!
var db = mongoose.connection.db;
var BSON = require('bson').BSONPure;
var binary = require('binary');
var body = require('body-parser');
var fs = require('fs');
var multer = require('multer');

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '/multer/');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({ storage : storage}).single('image');


db.on('error', console.error.bind(console, 'connection errrrrrrrror:'));
db.once('open', function() {
    console.log("mongodb is connected!!");
});

exports.upload = function(req, res) {
    upload(req,res,function(err) {
        console.log(req.file);
        fs.readFile(req.file.image.path, function (err, data){
            var dirname = "/multer/";
            var newPath = dirname + req.body.filename;
            fs.writeFile(newPath, data, function (err) {
                if(err) {
                    return res.end("Error uploading file.");
                }
                res.end("File is uploaded");
            });
        });
    });
};