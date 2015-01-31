// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var db = Ti.Database.open('mikatan');
//db.execute("DROP TABLE alerts");
//db.execute("DROP TABLE users");
//db.execute("DROP TABLE record_date");

//通知時間設定
db.execute('CREATE TABLE IF NOT EXISTS alerts(alert_id INTEGER PRIMARY KEY AUTOINCREMENT, hours INTEGER, minutes INTEGER);');
//ユーザー情報設定
db.execute('CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, nickname string, start_date string);');
//やったことの記録
db.execute('CREATE TABLE IF NOT EXISTS records(record_id INTEGER PRIMARY KEY AUTOINCREMENT, record_date date);');

//サンプルデータ用
db.execute("INSERT INTO users (nickname, start_date) VALUES ('さんぷるゆーざー1', '2015/01/27');");

var sql = "INSERT INTO records (record_date) VALUES ('2015/01/28')";
db.execute(sql);
var sql = "INSERT INTO records (record_date) VALUES ('2015/01/29')";
db.execute(sql);
/*
var sql = "SELECT * FROM users";
var rows = db.execute(sql);
while (rows.isValidRow()){
    Ti.API.debug(rows.field(0) + '\n' + rows.field(1) + '\n' + rows.field(2));
    rows.next();
}
*/

var rowUser = db.execute("SELECT start_date FROM users WHERE user_id=1");
var start_date = rowUser.field(0);
Ti.App.Properties.setString('start_date', start_date);


var alerts = db.execute("SELECT * FROM alerts;");
db.close();




/*
exports.iosStartWorkPush = function(popTime) {
	notification = Ti.App.iOS.scheduleLocalNotification({
		date: new Date(new Date().getTime()+(1000*10)),
		repeat: "daily",
		alertBody: "出勤時間です",
		alertAction: "今日も頑張りましょう！",
		sound: "default"
	});
};
*/
