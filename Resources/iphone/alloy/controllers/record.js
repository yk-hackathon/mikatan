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
    this.__controllerPath = "record";
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
    $.__views.record = Ti.UI.createWindow({
        backgroundColor: "#FFB6C1",
        id: "record"
    });
    $.__views.record && $.addTopLevelView($.__views.record);
    $.__views.lblMessage = Ti.UI.createLabel({
        top: 30,
        text: "今日もがんばりました",
        id: "lblMessage"
    });
    $.__views.record.add($.__views.lblMessage);
    $.__views.imgRecord = Ti.UI.createImageView({
        top: 40,
        id: "imgRecord",
        image: "sheet.png"
    });
    $.__views.record.add($.__views.imgRecord);
    $.__views.imgMikatan = Ti.UI.createImageView({
        bottom: 5,
        right: 10,
        height: 320,
        id: "imgMikatan",
        image: "mikatan_finish.png"
    });
    $.__views.record.add($.__views.imgMikatan);
    $.__views.imgHukidashi = Ti.UI.createImageView({
        bottom: 140,
        left: 20,
        width: 220,
        id: "imgHukidashi",
        image: "hukidashi_tweet.png"
    });
    $.__views.record.add($.__views.imgHukidashi);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var db = Ti.Database.open("mikatan");
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var d = date.getDate();
    var sql = "SELECT * FROM records WHERE record_date='" + year + "-" + month + "-" + d + "'";
    Ti.API.info(sql);
    var rows = db.execute(sql);
    if (rows.rowCount < 1) {
        var sql = "INSERT INTO records (record_date) VALUES ('" + year + "-" + month + "-" + d + "')";
        Ti.API.info(sql);
        db.execute(sql);
    }
    var start_date = Ti.App.Properties.getString("start_date");
    var sql = "SELECT record_date FROM records WHERE record_date >= '" + start_date + "' ORDER BY record_date limit 1";
    Ti.API.info(sql);
    var record_rows = db.execute(sql);
    var record_dates = [];
    var cnt = 0;
    record_rows.rowCount;
    while (rows.isValidRow()) {
        Ti.API.debug(rows.field(0));
        record_dates[cnt] = rows.field;
        var stampImage = Ti.UI.createImageView({
            image: "stamp.png"
        });
        var view = $.getView();
        view.add(stampImage);
        var animation = Ti.UI.createAnimation();
        animation.width = 70;
        animation.top = 40;
        animation.left = 10;
        animation.duration = 1e3;
        stampImage.animate(animation);
        rows.next();
        cnt++;
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;