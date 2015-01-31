var args = arguments[0] || {};
var db = Ti.Database.open('mikatan');

//recordテーブルに記録を保存
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var d = date.getDate();

//開始日設定用のSQL
//var sql = "UPDATE users SET start_date='" + year + "-" + month + "-" + d +"'";
var sql = "SELECT * FROM records WHERE record_date='" +year + "-" + month + "-" + d + "'";

Ti.API.info(sql);

var rows = db.execute(sql);

if(rows.rowCount < 1) {
	var sql = "INSERT INTO records (record_date) VALUES (" + year + "-" + month + "-" + d +")";
	Ti.API.info(sql);
	db.execute(sql);	
}

//開始日以降を取得する
var start_date = Ti.App.Properties.getString('start_date');
var sql = "SELECT record_date FROM records WHERE record_date >= " + start_date;
Ti.API.info(sql);
var rows = db.execute(sql);

var record_dates = [];
var cnt = 0;
while (rows.isValidRow()){
    Ti.API.debug(rows.field(0));
    record_dates[cnt] = rows.field;
    
    //画像を設置する
    var stampImage = Ti.UI.createImageView({
    	image: 'stamp.png',
    	bottom: 10,
    	left: 10
    });
    
    var view = $.getView();
    view.add(stampImage);
    rows.next();
    cnt++;
}



