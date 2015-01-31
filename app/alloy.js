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

Ti.App.iOS.cancelAllLocalNotifications();
var notifications = [];
notification_params = {
      alertBody: 'こんにちは、こんにちは',
      alertAction: 'OK',
      userInfo: {
        data: {param1:'これはparam1', param2:'これはparam2'}
      },
      sound: 'sound.mp3',
      repeat: 'daily',
      date: new Date((new Date()).getTime() +(1000 * 10))
    };
notifications.push(Ti.App.iOS.scheduleLocalNotification(notification_params));

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
