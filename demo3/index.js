/*
 * 1.connect.js文件中完成连接数据库的作用
 * 2.schema.js文件中定义了数据模型
 * 3.本文件中引用上述两个文件，并实例化了一组数据
 * 4.完成对数据库表中数据的增删改查
 * */
var mongoose = require('mongoose');
require('./connect');
var User = require('./schema.js');
mongoose.Promise = global.Promise;

var user = new User({
    name: 'douqing',
    age: 12,
    sex: '女'
});

user.save(function (err) {
    console.log('save status:', err ? 'failed' : 'success');
});

User.find({}, function (err, results) {
    if (err) {
        console.log('error message', err);
        return;
    }
    console.log('results', results);
});
User.findOne({name : 'douqing'},function (err, result) {
    if(err){
        console.log('error message:', err);
    }
    console.log('result', result);
});

User.findByIdAndUpdate('58ec4b0090c04916666ce203', {name: 'liji'}, function (err, result) {
    if (err) {
        console.log('error message:' + err);
    }
    console.log(result);
});

User.remove({name:'douqing'},function (err, result) {
    if (err){
        console.log('error message:' + err);
    }
    console.log('remove success');
});