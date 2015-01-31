function openNext(e) {
    var setting = Alloy.createController('setting').getView();
    //setting.openWindow({animated: true});
    $.index.openWindow(setting);
}

function clickMikatan(e) {
	var select = Alloy.createController('select_1').getView();
    $.index.openWindow(select);
}
Ti.App.NavigationRootView = $.index;

//$.lblToday.text = new Date();
$.btnGo.title = "せってい";
$.index.open();
