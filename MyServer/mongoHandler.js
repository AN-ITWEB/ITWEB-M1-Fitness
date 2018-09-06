var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://fitness:fitness1@ds141872.mlab.com:41872/fitness";

module.exports.AddExercise = async (exercise) => {
    var exerciseObj = { Exercise: exercise.Name, Description: exercise.Description, Set: exercise.Set, RepsTime: exercise.RepsTime };

    var conn = await MongoClient.connect(url, {useNewUrlParser: true});
    try {
        var dbo = conn.db('fitness');
        await dbo.collection('customers').insertOne(exerciseObj);
    } catch (error) {
        console.log(error);
    }
    finally{
        await conn.close();
    }
}

module.exports.DropCollection = async () => {
    var conn = await MongoClient.connect(url, {useNewUrlParser: true});
    try {
        var dbo = conn.db("fitness");
        dbo.collection('customers').drop();
    } catch (error) {
        console.log(error);
    }
    finally{
        await conn.close();
    }
}

module.exports.GetCollection = async () => {
    var conn = await MongoClient.connect(url, {useNewUrlParser: true});
    try {
        var dbo = conn.db("fitness");
        var data = dbo.collection('customers').find({}).toArray();
        return data;
    } catch (error) {
        console.log(error);
    }
    finally{
        await conn.close();
    }
}