var args = arguments[0] || {};

var db = Ti.Database.open('mikatan');
var rows = db.execute("SELECT * FROM alerts;");
Ti.API.info('Row count: ' + rows.rowCount);
var rowCount = rows.rowCount;

while (rows.isValidRow()){
    Ti.API.debug(rows.field(1) + '\n' + rows.field(0));
    rows.next();
}


/*
var colAlert = Alloy.Collections.alert;
colAlert.fetch();


colAlert.map(function(bookmark) {
	Ti.API.debug('hours: ' + colAlert.get('hours') + " minutes: " + colAlert.get('minutes'));
});
*/
$.btnSetting.addEventListener("click", function() {
	//alert("設定しました！");
	var hours   = $.pickerTime.value.getHours().toString();
	var minutes = $.pickerTime.value.getMinutes().toString();
	
	/*
	var alert = Alloy.createModel("alert", {
					alert_id: rows.rowCount + 1,
					hours: hours,
					minutes: minutes
				});
	*/
	if(rowCount > 0) {
		//更新
		var sql = "UPDATE alerts SET hours=" + hours + ", minutes=" + minutes + " WHERE alert_id=1";
		Ti.API.debug(sql);
		db.execute(sql);
	}else{
		//新規追加
		var sql = "INSERT INTO alerts (alert_id, hours, minutes) VALUES(" + rows.rowCount.toInt+1 + "," + hours + "," + minutes + ")";
		Ti.API.debug(sql);
		db.execute(sql);
	}
	alert("設定更新しました！");
	
	//プッシュ通知再設定
	var nowDate  = new Date();
	var year  = nowDate.getFullYear();
	var month = nowDate.getMonth() + 1;
	var day   = nowDate.getDate();
	/*
	var hour  = date.getHours();
	var min   = date.getMinutes();
	var sec   = date.getSeconds();
	*/
	
	//プッシュ通知したい時間
	Ti.API.info(year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + "00");
	
	var alertDate = new Date(year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + "00");
	
	
	var differenceStamp = alertDate.getTime() - nowDate.getTime();
	
	Ti.API.info("=========");
	Ti.API.info(alertDate.getTime());
	Ti.API.info(differenceStamp);
	Ti.API.info("=========");
	
	var testDate = new Date(parseInt(nowDate.getTime()) + parseInt(differenceStamp));
	
	Ti.API.info(testDate.getTime());
	Ti.API.info(testDate.getFullYear());
	Ti.API.info(testDate.getMonth());
	Ti.API.info(testDate.getDate());
	Ti.API.info(testDate.getHours());
	Ti.API.info(testDate.getMinutes());
	
	Ti.App.iOS.cancelAllLocalNotifications();
	var notifications = [];
	notification_params = {
    	alertBody: '女子力アップタイムはじまるよ！',
		alertAction: 'OK',
		userInfo: {
			data: {param1:'これはparam1', param2:'これはparam2'}
		},
		sound: 'sound.mp3',
		repeat: 'daily',
		date: new Date(nowDate.getTime() + differenceStamp)
    };
	notifications.push(Ti.App.iOS.scheduleLocalNotification(notification_params));
	//alert.save();
});
