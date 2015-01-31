function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "setting";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.setting = Ti.UI.createWindow({
        backgroundColor: "#FFB6C1",
        id: "setting"
    });
    $.__views.setting && $.addTopLevelView($.__views.setting);
    $.__views.lblSetting = Ti.UI.createLabel({
        top: 10,
        id: "lblSetting",
        text: "設定画面"
    });
    $.__views.setting.add($.__views.lblSetting);
    $.__views.pickerTime = Ti.UI.createPicker({
        format24: false,
        calendarViewShown: false,
        id: "pickerTime",
        top: "50",
        selectionIndicator: "true",
        useSpinner: "true",
        type: Ti.UI.PICKER_TYPE_TIME
    });
    $.__views.setting.add($.__views.pickerTime);
    $.__views.btnSetting = Ti.UI.createButton({
        bottom: 5,
        id: "btnSetting",
        title: "設定"
    });
    $.__views.setting.add($.__views.btnSetting);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var db = Ti.Database.open("mikatan");
    var rows = db.execute("SELECT * FROM alerts;");
    Ti.API.info("Row count: " + rows.rowCount);
    var rowCount = rows.rowCount;
    while (rows.isValidRow()) {
        Ti.API.debug(rows.field(1) + "\n" + rows.field(0));
        rows.next();
    }
    $.btnSetting.addEventListener("click", function() {
        var hours = $.pickerTime.value.getHours().toString();
        var minutes = $.pickerTime.value.getMinutes().toString();
        if (rowCount > 0) {
            var sql = "UPDATE alerts SET hours=" + hours + ", minutes=" + minutes + " WHERE alert_id=1";
            Ti.API.debug(sql);
            db.execute(sql);
        } else {
            var sql = "INSERT INTO alerts (alert_id, hours, minutes) VALUES(" + rows.rowCount.toInt + "1," + hours + "," + minutes + ")";
            Ti.API.debug(sql);
            db.execute(sql);
        }
        alert("設定更新しました！");
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1;
        var day = nowDate.getDate();
        Ti.API.info(year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":00");
        var alertDate = new Date(year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":00");
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
            alertBody: "女子力アップタイムはじまるよ！",
            alertAction: "OK",
            userInfo: {
                data: {
                    param1: "これはparam1",
                    param2: "これはparam2"
                }
            },
            sound: "sound.mp3",
            repeat: "daily",
            date: new Date(nowDate.getTime() + differenceStamp)
        };
        notifications.push(Ti.App.iOS.scheduleLocalNotification(notification_params));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;