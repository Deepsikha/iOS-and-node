/**
 * Created by lcom73 on 20/1/17.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb'); // connect to our database
var Stud = require('./stud');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

module.exports = app;

//router.route('/studs')
// create a stud (accessed at POST http://localhost:8080/api/studs)

    app.get('/',function (req, res) {
        Stud.find(function (err, data) {
            if (err)
                res.send(err);

            res.json(data);
        })
    })

    app.post('/create',function (req, res) {
        var stud = new Stud();      // create a new instance of the stud model
        stud.id = req.body.id1;
        stud.name = req.body.name;  // set the bears name (comes from the request)
        stud.marks = req.body.marks;  // set the bears name (comes from the request)
        stud.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'Bear created!'});
        });
    })

    app.post('/auto',function(req,res) {
        var bear = new Stud();
        // create a new instance of the Bear model
        bear.name = req.body.name;
        // set the bears name (comes from the request)
        bear.marks=req.body.marks;

        Stud.find({},{_id : 0,__v : 0},function (abb,acc) {
            if(abb){}
            else
            { console.log(acc[acc.length-1].id);
                bear.id=acc.length;
            }
        });
        // save the bear and check for errors
        Stud.find({"marks":req.body.marks,"name":req.body.name},function(err,data)
        {
            if(err){}
            else
            {
                if(data.length>0){
                    res.send({data:"Allready exist"});
                }
                else{
                    //bear.id=data.length+1;

                    addd();
                }
            }
        });
    })
//router.route('/studs/:sid')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    app.get('/studs/:sid',function (req, res) {
        Stud.validate();
        Stud.findById(req.params.sid, function (err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    })

    app.put('/studs/:sid',function (req, res) {

        // use our bear model to find the bear we want
        Stud.findById(req.params.sid, function (err, data) {

            if (err)
                res.send(err);

            data.name = req.body.name;  // update the bears info
            data.marks = req.body.marks;  // update the bears info


            // save the bear
            data.save(function (err) {
                if (err)
                    res.send(err);

                res.json({message: 'Bear updated!'});
            });

        });
    })

    app.delete('/studs/:sid',function (req, res) {
        Stud.remove({
            _id: req.params.sid
        }, function (err, stud) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
        });
    });

// all of our routes will be prefixed with /api
//app.use('/api', router);   //for eg /api/studs

var server = app.listen(8085, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Server started at http://%s:%s", host, port)
});
