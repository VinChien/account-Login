const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  console.log('require dotenv...');
  require('dotenv').config();
}

mongoose.connect(process.env.MONGODB_URI);

console.log('connecting to mongoDB...');

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to mongoDB!'));

module.exports = db;
