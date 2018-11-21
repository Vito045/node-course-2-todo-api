const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user')

var id = '5bf16364ce7efe618652ab3b';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', JSON.stringify(todo, undefined, 2))
// });

// Todo.findById(id).then((todo) => {
//     console.log(todo)
// })

User.findById(id).then((user) => {
    if(!user){
        return console.log('Unable to find user')
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e)
})