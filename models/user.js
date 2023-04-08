// 載入 mongoose
const mongoose = require('mongoose');
// Mongoose 提供了一個 mongoose.Schema 模組
const Schema = mongoose.Schema;
// 可以用 new Schema() 的方式來建構一個新的 Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
});
// 透過 module.exports 輸出
module.exports = mongoose.model('user', userSchema);
