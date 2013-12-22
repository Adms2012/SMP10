
function convertRStoJSON(rs) {
	var arr = [];
    for (var i = 0; i < rs.rows.length; i++) {
        arr.push(rs.rows.item(i));
    }
    return JSON.stringify(arr);
}

function initServiceListHistory() {
    console.log("Enter initServiceListHistory");    
    console.log("  Start calling db.transaction to SELECT * FROM ...");
    sqlite.db.transaction(function(tx) {
        //tx.executeSql("SELECT * FROM tb_serviceItemHistory ORDER BY id", [],
        tx.executeSql("SELECT id, serviceItemDescription, serviceItemQty FROM tb_serviceItemHistory ORDER BY id", [],
                      render,
				      logError2);
    });
    console.log("  Finish calling db.transaction to SELECLT * FROM ...");    
    console.log("Exit initServiceListHistory");        
}
function serviceItemHistRefreshClick(e){
    console.log("Enter serviceItemHistRefreshClick");
    var dataSource = app.serviceItemHist.serviceItemHistDataSource;
    console.log( app.serviceItemHist.serviceItemHistDataSource );
	$("#serviceHist-list").kendoMobileListView({
		dataSource:dataSource ,
		template: $("#serviceHist-list-template").html(),
        style: "inset"
	});     
    console.log("Exit serviceItemHistRefreshClick");
}
  
function getServiceHist() {
	var render2 = function (tx, rs) {
        console.log("  Enter getServiceHist.render2");
		var d = $.parseJSON(convertRStoJSON(rs));
        console.log(d);
		$("#serviceHist-list2").kendoMobileListView({
			dataSource: d,
			template: $("#serviceHist-list2-template").html(),
            style: "inset"
		});
        console.log("  Exit getServiceHist.render2");
	}
    
    console.log("Enter getServiceHist");
	if (sqlite.db) {
        console.log("  calling selectAllServiceItemHistory");
		sqlite.selectAllServiceItemHistory(render2);
	}
    console.log("Exit getServiceHist");
}

