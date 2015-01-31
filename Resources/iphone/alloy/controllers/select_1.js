function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openNext(e) {
        Ti.API.info("click " + e.source.nextName + " !");
        Ti.App.choise = e.source.nextName;
        var setting = Alloy.createController("select_2").getView();
        Ti.App.NavigationRootView.openWindow(setting);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "select_1";
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
    $.__views.select = Ti.UI.createWindow({
        backgroundColor: "pink",
        id: "select"
    });
    $.__views.select && $.addTopLevelView($.__views.select);
    $.__views.mikatanArea = Ti.UI.createView({
        backgroundColor: "pink",
        height: Ti.UI.SIZE,
        id: "mikatanArea"
    });
    $.__views.select.add($.__views.mikatanArea);
    $.__views.baloon = Ti.UI.createImageView({
        top: 0,
        height: 80,
        image: "select/baloon_1.png",
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
    $.__views.upperBody = Ti.UI.createImageView({
        image: "select/btn-upper_body.png",
        width: "50%",
        left: 0,
        bottom: 0,
        id: "upperBody",
        nextName: "upper"
    });
    $.__views.select.add($.__views.upperBody);
    openNext ? $.__views.upperBody.addEventListener("click", openNext) : __defers["$.__views.upperBody!click!openNext"] = true;
    $.__views.lowerBody = Ti.UI.createImageView({
        image: "select/btn-lower_body.png",
        width: "50%",
        bottom: 0,
        right: 0,
        id: "lowerBody",
        nextName: "lower"
    });
    $.__views.select.add($.__views.lowerBody);
    openNext ? $.__views.lowerBody.addEventListener("click", openNext) : __defers["$.__views.lowerBody!click!openNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.upperBody!click!openNext"] && $.__views.upperBody.addEventListener("click", openNext);
    __defers["$.__views.lowerBody!click!openNext"] && $.__views.lowerBody.addEventListener("click", openNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;