module.exports.users = function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://fitness:fitness1@ds141872.mlab.com:41872/fitness";

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("fitness");
        var exerciseObj = { Exercise: "Plank", Description: "Place your elbows on the floor shoulderwidth apart with legs stretched out behind you so only your elbows and toes are in contact with the ground. Use your abdominal muscles to keep …", Set: "1", RepsTime: "30 sec" };
        dbo.collection("customers").insertOne(exerciseObj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
    res.send('1 document inserted');
};