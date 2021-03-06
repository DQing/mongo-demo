/*
 * 1.connect.js文件中完成连接数据库的作用
 * 2.schema.js文件中定义了数据模型
 * 3.本文件中引用上述两个文件，并实例化了一组数据
 * 4.使用sava方法保存于数据库中
 * */
var mongoose = require('mongoose');
require('./connect');
var User = require('./schema.js');
mongoose.Promise = global.Promise;

var user = new User({
    name: 'douqing',
    age: 18,
    sex: '女'
});

user.save(function (err) {
    console.log('save status:', err ? 'failed' : 'success');
});
