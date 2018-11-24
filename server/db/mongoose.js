var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var MONGODB_URI = 'ds261440.mlab.com:61440/heroku_xd6pt0hz';
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

mongoose.exports = {mongoose}