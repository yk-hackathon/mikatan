var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Ti.App.iOS.cancelAllLocalNotifications();

var notifications = [];

notification_params = {
    alertBody: "こんにちは、こんにちは",
    alertAction: "OK",
    userInfo: {
        data: {
            param1: "これはparam1",
            param2: "これはparam2"
        }
    },
    sound: "sound.mp3",
    repeat: "daily",
    date: new Date(new Date().getTime() + 1e4)
};

notifications.push(Ti.App.iOS.scheduleLocalNotification(notification_params));

Alloy.createController("index");