function openNext(e) {
    var setting = Alloy.createController('setting').getView();
    setting.open();
}

$.lblToday.text = new Date();
$.btnGo.title = "タップしてね";
$.index.open();
