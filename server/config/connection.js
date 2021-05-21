const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/family-graph', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
//not 100% these are the right settings we need for true/false, just taking from book search for now
});

module.exports = mongoose.connection;