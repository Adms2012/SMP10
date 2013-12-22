// get a list of ServiceItemHistory for our home view from our sqlite database

function convertRStoJSON(rs) {
	var arr = [];
    for (var i = 0; i < rs.rows.length; i++) {
        arr.push(rs.rows.item(i));
    }
    return JSON.stringify(arr);
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
	var render = function (tx, rs) {
        console.log("Enter rendering");
		var d = $.parseJSON(convertRStoJSON(rs));
		$("#serviceHist-list2").kendoMobileListView({
			dataSource: d,
			template: $("#serviceHist-list2-template").html(),
            style: "inset"
		});
        console.log("Exit rendering");
	}
    
    console.log("Enter getServiceHist");
	if (sqlite.db) {
         console.log("  calling selectAllServiceItemHistory");
		sqlite.selectAllServiceItemHistory(render);
	}
    console.log("Exit getServiceHist");
}


(function (global) {
    var serviceItemHistoryModel,
        app = global.app = global.app || {};

    serviceItemHistoryModel = kendo.data.ObservableObject.extend({
        serviceItemHistDataSource: null,
        serviceItemHistData: null,
        
        init: function () {
            console.log("Enter serviceItemHistoryModel.init");
            console.log("Calling sqlite.init");
            sqlite.init(); // initialize the database            
            var that = this,
                dataSource;
            var render = function (tx, rs) {
                console.log("Enter rendering");
                //alert(rs);
                //var d0 = convertRStoJSON(rs);
                //console.log( d0 );
        		var d = $.parseJSON(convertRStoJSON(rs));
                //console.log( d );
                dataSource = new kendo.data.DataSource ( {data: d} );
                dataSource.read();
                console.log( dataSource );
                //
                console.log("Set the  dataSource" );
                kendo.data.ObservableObject.fn.init.apply(that, []);
                that.set("serviceItemHistDataSource", dataSource);
                that.set("serviceItemHistData", d);
                //
             
                console.log("Exit rendering");
                
        	};
    
        	var logError2 = function(tx, e) {
        		console.log("SQLite Error: " + e);
        	};
            
            console.log("Start calling db.transaction to SELECT * FROM ...");
            sqlite.db.transaction(function(tx) {
                //tx.executeSql("SELECT * FROM tb_serviceItemHistory ORDER BY id", [],
                tx.executeSql("SELECT id, serviceItemDescription, serviceItemQty FROM tb_serviceItemHistory ORDER BY id", [],
                              render,
    					      logError2);
    	    });
            console.log("Finish calling db.transaction to SELECLT * FROM ...");
                
            kendo.data.ObservableObject.fn.init.apply(that, []);
            console.log("calling sqlite.db");
            if (sqlite.db) {
                console.log("calling selectAllServiceItemHistory again after calling sqlite.db ");
        		sqlite.selectAllServiceItemHistory(render);
        	}            
            console.log("examine content of dataSource");
    		//sqlite.selectAllServiceItemHistory(render);
            console.log( dataSource );
            console.log("set serviceItemHistDataSource before exiting");

            that.set("serviceItemHistDataSource", dataSource);
            
            console.log("Exit serviceItemHistoryModel.init");

        },
      
    });
    

   
    app.serviceItemHist = {
        viewModel: new serviceItemHistoryModel()
    };
    
})(window);