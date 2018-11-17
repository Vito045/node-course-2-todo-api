const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5befd06a01863df71812770a')
    }, {
        $set: {
            name: 'Vitaliy'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => console.log(result))

    db.close();
});