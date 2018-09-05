/* GET home page */
module.exports.index = function (req, res) {

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://fitness:fitness1@ds141872.mlab.com:41872/fitness";

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("fitness");
        dbo.collection("customers").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.render('index', { title: 'My Fitness app', exercises: result });
        });
    });
};