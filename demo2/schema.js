var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({ //定义一个Schema
    name: String,
    age: Number,
    sex: String
});
var UserModel = mongoose.model('User', UserSchema, 'test', false);//将该Schema发布为Model

module.exports = UserModel;