const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DATABASE)
.then(() => console.log("mongo is connected"))
.catch((err) => console.log(err));


module.exports.User = require('./user');
module.exports.Poll = require('./poll');
