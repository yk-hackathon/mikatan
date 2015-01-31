var args = arguments[0] || {};


// TODO: データ用のファイルに移動させたほうが良さそう。
var data = {
	"upper": [
		{
			"image": "select/upper/btn-narrow_part.png",
			"name": "narrow_part",
			"number": "1",
		},
		{
			"image": "select/upper/btn-back.png",
			"name": "back",
			"number": "2",
		},
		{
			"image": "select/upper/btn-upper_arms.png",
			"name": "upper_arms",
			"number": "3",
		},
	],
	"lower": [
		{
			"image": "select/lower/btn-calfs.png",
			"name": "calfs",
			"number": "4",
		},
		{
			"image": "select/lower/btn-dropsy.png",
			"name": "dropsy",
			"number": "5",
		},
		{
			"image": "select/lower/btn-thighs.png",
			"name": "thighs",
			"number": "6",
		},
	]
};

var choise = Ti.App.choise;

// TODO: refactor 無駄な繰り返し作業
$.choise_1.image = data[choise][0]["image"];
$.choise_2.image = data[choise][1]["image"];
$.choise_3.image = data[choise][2]["image"];


function openNext(e) {
    var excute = Alloy.createController('excute').getView();
    //setting.openWindow({animated: true});
    Ti.App.NavigationRootView.openWindow(excute);
}