function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openNext() {
        var record = Alloy.createController("record").getView();
        Ti.App.NavigationRootView.openWindow(record);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "excute";
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
    var __defers = {};
    $.__views.excute = Ti.UI.createWindow({
        backgroundColor: "pink",
        id: "excute"
    });
    $.__views.excute && $.addTopLevelView($.__views.excute);
    $.__views.lblToday = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: 5,
        left: 10,
        id: "lblToday",
        text: "今日はコレ！"
    });
    $.__views.excute.add($.__views.lblToday);
    $.__views.btnGo = Ti.UI.createImageView({
        image: "excute/btn-complete.png",
        width: "100%",
        botoom: 0,
        id: "btnGo",
        title: "おわったよ！"
    });
    $.__views.excute.add($.__views.btnGo);
    openNext ? $.__views.btnGo.addEventListener("click", openNext) : __defers["$.__views.btnGo!click!openNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnGo!click!openNext"] && $.__views.btnGo.addEventListener("click", openNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;