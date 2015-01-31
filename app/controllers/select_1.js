var args = arguments[0] || {};

function openNext(e) {
	Ti.API.info('click '+e.source.nextName+' !');
	Ti.App.choise = e.source.nextName;
    var setting = Alloy.createController('select_2').getView();
    Ti.App.NavigationRootView.openWindow(setting);
}