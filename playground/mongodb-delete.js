const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.');

    db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => console.log(result))
    db.collection('Users').deleteOne({_id: new ObjectID('5bf01abc2e8e3f2c4d490c37')}).then((result) => console.log(result))

    db.close();
});