/*
 *1.这是第一个简单的小例子
 *2.连接数据库中的mongo表
 */

var mongoose = require("mongoose");

var url = "mongodb://127.0.0.1:27017/mongo";
var db = mongoose.connect(url);

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
    console.log("数据库连接成功");
});