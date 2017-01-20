// Modules
var express = require('express');
var bodyParser = require('body-parser');

// END modules

var app = express();
var server = require('http').Server(app);
var sql = require('./db_connect.js');


//middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//end middleware


// define routes
app.get('/',function (req,res) {
    sql.executeSql("SELECT * FROM pro", function (err, data) {
      if(err){
          return res.send({error: err});
      }
      return res.send({data: data});
    })
});

app.post('/entry', function(req, res) {
    console.log(req);
    var query = "insert into pro(id,name,color,price) values('"+req.body.id1+"','"+ req.body.name+"','"+ req.body.color1+"','"+ req.body.price+"')";
    console.log(query);
    sql.executeSql(query, function (err, data) {
        if(err){
            return res.send({error: err});
        }
        return res.send({data : data});
    })
});

app.put('/update/:id', function(req, res) {
    console.log("update pro set name='"+req.body.name+"' where id="+ req.params.id +"");
    sql.executeSql("update pro set name='"+req.body.name+"' where id="+ req.params.id +"", function (err, data) {
        if(err){
            return res.send({error: err});
        }
        return res.send({data : data});
    })
});

//app.post('/delete', function(req, res) {
//    var query = "delete from pro where id = "+req.body.id1+"";
//    sql.executeSql(query, function (err, data) {
//        if(err){
//            return res.send({error: err});
//        }
//        return res.send({data : data});
//    })
//});

app.delete('/delete/api', function (req, res) {
    console.log("delete from pro where id="+ req.body.id1 +"");
    var query = "delete from pro where id="+ req.body.id1 +"";
    sql.executeSql(query, function (err, data) {
        if(err){
            return res.send({error: err});
        }
        return res.send({data : data});
    })
})

//end routes
var server = app.listen(8085, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})

