function openNext(e) {
    var record = Alloy.createController('record').getView();
    Ti.App.NavigationRootView.openWindow(record);
}

