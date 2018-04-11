var express = require("express");
var app = express();
bodyparser = require("body-parser");
var mysql = require('mysql');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ type: "application/json" }));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tiger",
    database: "prem",
    multipleStatements: true
});

con.connect(function (err) {
    if (err) throw err;
    //Select all customers and return the result object:
    console.log("Connected to DB");
});
app.post("/users", function (req, res) {
    var sql = "INSERT INTO users VALUE ('" + req.body.name + "', '" + req.body.team + "', '" + req.body.points + "');";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Record inserted");
        res.send(result);

    });

});


app.post("/mult", function (req, res) {
    var sql1 = req.body.query1;
    var sql2 = req.body.query2;
    con.query((sql1 + sql2), function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

app.post("/ten", function (req, res) {
    var sql = req.body.query;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});
app.post("/20", function (req, res) {
    var sql = req.body.query;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});
app.post("/30", function (req, res) {
    var sql = req.body.query;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});
app.post("/40", function (req, res) {
    var sql = req.body.query;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});
app.post("/50", function (req, res) {
    var sql = req.body.query;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

app.post("/delete_db", function (req, res) {
    // console.log(req.body.query + " req.body");
    var sql = req.body.query;
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Record delete" + result);
        res.send(result);
    });
});

app.listen(3000, function () {
    console.log("server running at port 3000");
});