module.exports.exercises = function (req, res) {
    var exerciseObj = { Exercise: req.body.Exercise, Description: req.body.Description, Set: req.body.Set, RepsTime: req.body.RepsTime };

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://fitness:fitness1@ds141872.mlab.com:41872/fitness";

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("fitness");
        dbo.collection("customers").insertOne(exerciseObj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
    res.redirect('/')
};

module.exports.dropCollection = function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://fitness:fitness1@ds141872.mlab.com:41872/fitness";

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err && err.code != 404) throw err;
        var dbo = db.db("fitness");
        dbo.collection("customers").drop(function(err, delOK) {
            if (err) throw err;
            if (delOK) console.log("Collection deleted");
            db.close();
        }).catch(err => err.message.match('/ns not found/'));
    });
    res.redirect('/')
};