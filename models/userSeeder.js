const userModel = require('./user');
const userData = require('../users.json').results;
const db = require('../config/mongoose');

db.once('open', () => {
  console.log('running userSeeder.js ...');

  userModel
    .create(userData)
    .then(() => {
      console.log('userSeeder done!');
      db.close();
    })
    .catch((err) => console.log(err));
});
