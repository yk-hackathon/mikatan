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
        var setting = Alloy.createController("select_1").getView();
        Ti.App.NavigationRootView.openWindow(setting);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "select_2";
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
        image: "select/baloon_2.png",
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
    $.__views.choise_1 = Ti.UI.createImageView({
        bottom: 0,
        left: 0,
        width: "32%",
        image: "select/upper/btn-narrow_part.png",
        id: "choise_1"
    });
    $.__views.select.add($.__views.choise_1);
    openNext ? $.__views.choise_1.addEventListener("click", openNext) : __defers["$.__views.choise_1!click!openNext"] = true;
    $.__views.choise_2 = Ti.UI.createImageView({
        bottom: 0,
        left: "34%",
        width: "32%",
        image: "select/upper/btn-back.png",
        id: "choise_2"
    });
    $.__views.select.add($.__views.choise_2);
    openNext ? $.__views.choise_2.addEventListener("click", openNext) : __defers["$.__views.choise_2!click!openNext"] = true;
    $.__views.choise_3 = Ti.UI.createImageView({
        bottom: 0,
        right: 0,
        width: "32%",
        image: "select/upper/btn-upper_arms.png",
        id: "choise_3"
    });
    $.__views.select.add($.__views.choise_3);
    openNext ? $.__views.choise_3.addEventListener("click", openNext) : __defers["$.__views.choise_3!click!openNext"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var data = {
        upper: [ {
            image: "select/upper/btn-narrow_part.png",
            name: "narrow_part",
            number: "1"
        }, {
            image: "select/upper/btn-back.png",
            name: "back",
            number: "2"
        }, {
            image: "select/upper/btn-upper_arms.png",
            name: "upper_arms",
            number: "3"
        } ],
        lower: [ {
            image: "select/lower/btn-calfs.png",
            name: "calfs",
            number: "4"
        }, {
            image: "select/lower/btn-dropsy.png",
            name: "dropsy",
            number: "5"
        }, {
            image: "select/lower/btn-thighs.png",
            name: "thighs",
            number: "6"
        } ]
    };
    var choise = Ti.App.choise;
    $.choise_1.image = data[choise][0]["image"];
    $.choise_2.image = data[choise][1]["image"];
    $.choise_3.image = data[choise][2]["image"];
    __defers["$.__views.choise_1!click!openNext"] && $.__views.choise_1.addEventListener("click", openNext);
    __defers["$.__views.choise_2!click!openNext"] && $.__views.choise_2.addEventListener("click", openNext);
    __defers["$.__views.choise_3!click!openNext"] && $.__views.choise_3.addEventListener("click", openNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;