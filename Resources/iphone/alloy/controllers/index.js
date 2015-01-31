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
        var setting = Alloy.createController("setting").getView();
        $.index.openWindow(setting);
    }
    function clickMikatan() {
        var select = Alloy.createController("select_1").getView();
        $.index.openWindow(select);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "pink",
        id: "__alloyId0"
    });
    $.__views.lblToday = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: 5,
        left: 10,
        id: "lblToday",
        text: "1日目"
    });
    $.__views.__alloyId0.add($.__views.lblToday);
    $.__views.mikatanArea = Ti.UI.createView({
        backgroundColor: "pink",
        height: Ti.UI.SIZE,
        id: "mikatanArea"
    });
    $.__views.__alloyId0.add($.__views.mikatanArea);
    clickMikatan ? $.__views.mikatanArea.addEventListener("click", clickMikatan) : __defers["$.__views.mikatanArea!click!clickMikatan"] = true;
    $.__views.baloon = Ti.UI.createImageView({
        top: 0,
        height: 80,
        image: "index/baloon.png",
        id: "baloon"
    });
    $.__views.mikatanArea.add($.__views.baloon);
    $.__views.mikatan = Ti.UI.createImageView({
        top: 60,
        height: 300,
        left: 70,
        image: "shared/mikatan_1.png",
        id: "mikatan"
    });
    $.__views.mikatanArea.add($.__views.mikatan);
    $.__views.btnGo = Ti.UI.createButton({
        bottom: 10,
        id: "btnGo",
        title: "タップしてね"
    });
    $.__views.__alloyId0.add($.__views.btnGo);
    openNext ? $.__views.btnGo.addEventListener("click", openNext) : __defers["$.__views.btnGo!click!openNext"] = true;
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.NavigationRootView = $.index;
    $.btnGo.title = "せってい";
    $.index.open();
    __defers["$.__views.mikatanArea!click!clickMikatan"] && $.__views.mikatanArea.addEventListener("click", clickMikatan);
    __defers["$.__views.btnGo!click!openNext"] && $.__views.btnGo.addEventListener("click", openNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;