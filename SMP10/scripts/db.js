
var sqlite = function () {
	var defaultData = {
		serviceItems: [
            {
            "userID": "TestUser",
            "serviceID": 1,
            "serviceName": "Man Haircut",
            "serviceItemId": 1,
            "serviceItemDescription": "Man Haircut Crewcut",
            "serviceItemUnitPrice": 20.5,
            "serviceItemQty": 2,
            "serviceItemSubTotal": 41.5,
            "serviceItemExtra": 10,
            "serviceItemTotal": 51.5,
            "serviceItemNotes": "Notes 1",
            "serviceItemTimeStamp": "2013-12-21T07:01:24.685Z"
            },
            {
            "userID": "TestUser",
            "serviceID": 1,
            "serviceCategory": "Hair",
            "serviceName": "Man Haircut",
            "serviceItemId": 2,
            "serviceItemDescription": "Man Haircut Short",
            "serviceItemUnitPrice": 15.5,
            "serviceItemQty": 3,
            "serviceItemSubTotal": 46.5,
            "serviceItemExtra": 0,
            "serviceItemTotal": 46.5,
            "serviceItemTimeStamp": "2013-12-21T07:01:24.685Z"
            }
        ]
	};
    
	// initialize and create our default table
	var init = function() {
		if (window.sqlitePlugin !== undefined) {
			console.log("Using built-in SQL Lite");
			sqlite.db = window.sqlitePlugin.openDatabase("serviceItemDB");
		}
		else {
			// For debugging in simulator fallback to native SQL Lite
			console.log("Using built-in SQL Lite");
			sqlite.db = window.openDatabase("serviceItemDB", "1.0", "Service Apps DB", 200000);
		}
        
		sqlite.db.transaction(function(tx) {
			console.log("create our table if it doesn't already exist");
			//alert("create our table if it doesn't already exist");
			tx.executeSql("CREATE TABLE IF NOT EXISTS tb_serviceItemHistory (id INTEGER PRIMARY KEY AUTOINCREMENT, userID TEXT, serviceID INTEGER,serviceCategory TEXT,serviceName TEXT,serviceItemId INTEGER,serviceItemDescription TEXT,serviceItemUnitPrice REAL,serviceItemQty INTEGER,serviceItemSubTotal REAL,serviceItemExtra REAL,serviceItemTotal REAL,serviceItemTimeStamp TEXT) "  , []);
            
			//alert("check to see if we already have records in our table - it not, populate with default values");
			console.log("check to see if we already have records in our table - it not, populate with default values");
			tx.executeSql("SELECT * FROM tb_serviceItemHistory", [],
						  checkServiceItemHistoryCount,
						  logError);
		});
	}
    
	var checkServiceItemHistoryCount = function (tx, rs) {
		var self = this;
        
		if (rs.rows.length == 0) {
			$.each(defaultData.serviceItems, function(index, data) {
				self.sqlite.insertRecord(data.serviceItemDescription, data.serviceItemQty);
			});
		}
        
		///getServiceItemHistory(); // load our home view with our newly inserted list of subreddits
	}
    
	var logSuccess = function(tx) {
		console.log("SQLite Query Executed: " + tx);
	}
    
	var logError = function(tx, e) {
		console.log("SQLite Error: " + e);
	}
    
	var insertRecord = function(serviceItemDescription, serviceItemQty) {
        console.log("insertRecord " + serviceItemDescription + " " + serviceItemQty);
		sqlite.db.transaction(function(tx) {
			tx.executeSql("INSERT INTO tb_serviceItemHistory (serviceItemDescription, serviceItemQty) VALUES (?,?)", [serviceItemDescription, serviceItemQty] ,
						  logSuccess,
						  logError);
		});
	}
    
	var deleteRecord = function(id) {
		sqlite.db.transaction(function(tx) {
			tx.executeSql("DELETE FROM tb_serviceItemHistory WHERE ID=?", [id],
						  logSuccess,
						  logError);
		});
	}
    
    var selectAllServiceItemHistory = function(fn) {
        // alert("selectAllServiceItemHistory");
        sqlite.db.transaction(function(tx) {
            //tx.executeSql("SELECT * FROM tb_serviceItemHistory ORDER BY id", [],
            tx.executeSql("SELECT id, serviceItemDescription, serviceItemQty FROM tb_serviceItemHistory ORDER BY id", [],
                          fn,
					      logError);
	    });
    }   

	return {
		init: init,
		logSuccess: logSuccess,
		logError : logError,
		insertRecord: insertRecord,
		deleteRecord: deleteRecord,
        selectAllServiceItemHistory: selectAllServiceItemHistory
	}
}();