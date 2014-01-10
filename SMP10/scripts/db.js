
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

	var menuData = {
		facialMenu: 
		[
			
			{
			"userID": "TestUser",
			"serviceID": 200,
			"serviceCategory": "Facial",
			"serviceName": "Facial 1 hour",
			"serviceDescription": "Facial 1 hour",
			"serviceItemId": 200,
			"serviceItemDescription": "Facial 1 hour",
			"serviceItemUnitPrice":        35,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 201,
			"serviceCategory": "Facial",
			"serviceName": "Make up",
			"serviceDescription": "Make up",
			"serviceItemId": 201,
			"serviceItemDescription": "Make up",
			"serviceItemUnitPrice":        30,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 202,
			"serviceCategory": "Facial",
			"serviceName": "Eyelash Extension",
			"serviceDescription": "Eyelash Extension",
			"serviceItemId": 202,
			"serviceItemDescription": "Eyelash Extension",
			"serviceItemUnitPrice":        30,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 203,
			"serviceCategory": "Facial",
			"serviceName": "Eyebrowns",
			"serviceDescription": "Eyebrows",
			"serviceItemId": 203,
			"serviceItemDescription": "Eyebrows",
			"serviceItemUnitPrice":        8,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 204,
			"serviceCategory": "Facial",
			"serviceName": "Chip or upper lip",
			"serviceDescription": "Chip or upper lip",
			"serviceItemId": 204,
			"serviceItemDescription": "Chip or upper lip",
			"serviceItemUnitPrice":        5,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""

			},
			{
			"userID": "TestUser",
			"serviceID": 205,
			"serviceCategory": "Facial",
			"serviceName": "Full face",
			"serviceDescription": "Full face",
			"serviceItemId": 205,
			"serviceItemDescription": "Full Face",
			"serviceItemUnitPrice":        22,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 206,
			"serviceCategory": "Facial",
			"serviceName": "Underarms",
			"serviceDescription": "Underarms",
			"serviceItemId": 206,
			"serviceItemDescription": "Underarms",
			"serviceItemUnitPrice":        12,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 207,
			"serviceCategory": "Facial",
			"serviceName": "Bikini lines",
			"serviceDescription": "Bikini lines",
			"serviceItemId": 207,
			"serviceItemDescription": "Bikini lines",
			"serviceItemUnitPrice":        15,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 208,
			"serviceCategory": "Facial",
			"serviceName": "Full leg",
			"serviceDescription": "Full leg",
			"serviceItemId": 208,
			"serviceItemDescription": "Full leg",
			"serviceItemUnitPrice":        40,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 209,
			"serviceCategory": "Facial",
			"serviceName": "Half leg",
			"serviceDescription": "Half leg",
			"serviceItemId": 209,
			"serviceItemDescription": "Half leg",
			"serviceItemUnitPrice":        25,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 210,
			"serviceCategory": "Facial",
			"serviceName": "Full arm",
			"serviceDescription": "Full arm",
			"serviceItemId": 210,
			"serviceItemDescription": "Full arm",
			"serviceItemUnitPrice":        30,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 211,
			"serviceCategory": "Facial",
			"serviceName": "Half arm",
			"serviceDescription": "Half arm",
			"serviceItemId": 211,
			"serviceItemDescription": "Half arm",
			"serviceItemUnitPrice":        20,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 212,
			"serviceCategory": "Facial",
			"serviceName": "Eyebrows Soft-touch Perm. Make-up",
			"serviceDescription": "Eyebrows Soft-touch Perm. Make-up",
			"serviceItemId": 212,
			"serviceItemDescription": "Eyebrows soft-touch Per. Make-up",
			"serviceItemUnitPrice":        150,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 213,
			"serviceCategory": "Facial",
			"serviceName": "Lipliner Soft-touch Perm. Make-up",
			"serviceDescription": "Lipliner Soft-touch Perm. Make-up",
			"serviceItemId": 213,
			"serviceItemDescription": "Lipliner Soft-touch Perm. Make-up",
			"serviceItemUnitPrice":        100,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 214,
			"serviceCategory": "Facial",
			"serviceName": "Eyeliner Soft-touch Perm. Make-up",
			"serviceDescription": "Eyeliner Soft-touch Perm. Make-up",
			"serviceItemId": 214,
			"serviceItemDescription": "Eyeliner Soft-touch Perm. Make-up",
			"serviceItemUnitPrice":        100,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			},
			{
			"userID": "TestUser",
			"serviceID": 215,
			"serviceCategory": "Facial",
			"serviceName": "Full-lips Soft-touch Perm. Make-up",
			"serviceDescription": "Full-lips Soft-touch Perm. Make-up",
			"serviceItemId": 215,
			"serviceItemDescription": "Full-lips Soft-touch Perm. Make-up",
			"serviceItemUnitPrice":        300,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "up"
			}
		]
		,	hairMenu: 
		[
			{
			"userID": "TestUser",
			"serviceID": 1,
			"serviceCategory": "Hair",
			"serviceName": "Man haircut",
			"serviceDescription": "Man Haircut",
			"serviceItemId": 1,
			"serviceItemDescription": "Man Haircut",
			"serviceItemUnitPrice":        12,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 2,
			"serviceCategory": "Hair",
			"serviceName": "Woman haircut",
			"serviceDescription": "Woman Haircut",
			"serviceItemId": 2,
			"serviceItemDescription": "Woman Haircut",
			"serviceItemUnitPrice":        15,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 3,
			"serviceCategory": "Hair",
			"serviceName": "* Blowdry extra",
			"serviceDescription": "Blow dry care",
			"serviceItemId": 3,
			"serviceItemDescription": "* Blowdry extra",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 4,
			"serviceCategory": "Hair",
			"serviceName": "Children haircut",
			"serviceDescription": "Children haircut",
			"serviceItemId": 4,
			"serviceItemDescription": "Children haircut",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 5,
			"serviceCategory": "Hair",
			"serviceName": "Bang",
			"serviceDescription": "Bang",
			"serviceItemId": 5,
			"serviceItemDescription": "Bang",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 6,
			"serviceCategory": "Hair",
			"serviceName": "Shampoo Set",
			"serviceDescription": "Shampoo Set",
			"serviceItemId": 6,
			"serviceItemDescription": "Shampoo Set",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 7,
			"serviceCategory": "Hair",
			"serviceName": "Style",
			"serviceDescription": "Style",
			"serviceItemId": 7,
			"serviceItemDescription": "Style",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 8,
			"serviceCategory": "Hair",
			"serviceName": "Up-do",
			"serviceDescription": "Up-do",
			"serviceItemId": 8,
			"serviceItemDescription": "Up-do",
			"serviceItemUnitPrice":        "35",
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			 {
			"userID": "TestUser",
			"serviceID": 9,
			"serviceCategory": "Hair",
			"serviceName": "Perm",
			"serviceDescription": "Perm",
			"serviceItemId": 9,
			"serviceItemDescription": "Perm",
			"serviceItemUnitPrice":        "35",
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 10,
			"serviceCategory": "Hair",
			"serviceName": "Color",
			"serviceDescription": "Color",
			"serviceItemId": 10,
			"serviceItemDescription": "Color",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 11,
			"serviceCategory": "Hair",
			"serviceName": "Full Weave",
			"serviceDescription": "Full Weave",
			"serviceItemId": 11,
			"serviceItemDescription": "Full Weave",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 12,
			"serviceCategory": "Hair",
			"serviceName": "Partial Weave",
			"serviceDescription": "Partial Weave",
			"serviceItemId": 12,
			"serviceItemDescription": "Partial Weave",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 13,
			"serviceCategory": "Hair",
			"serviceName": "Deep Conditioner",
			"serviceDescription": "Deep Conditioner",
			"serviceItemId": 13,
			"serviceItemDescription": "Deep Conditioner",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 14,
			"serviceCategory": "Hair",
			"serviceName": "Japanese Straightening",
			"serviceDescription": "Japanese Straightening",
			"serviceItemId": 14,
			"serviceItemDescription": "Japanese Straightening",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 15,
			"serviceCategory": "Hair",
			"serviceName": "Brazillian Blowout",
			"serviceDescription": "Brazillian Blowout",
			"serviceItemId": 15,
			"serviceItemDescription": "Brazillian Blowout",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			},
			{
			"userID": "TestUser",
			"serviceID": 16,
			"serviceCategory": "Hair",
			"serviceName": "Hair Extensions",
			"serviceDescription": "Hair Extensions",
			"serviceItemId": 16,
			"serviceItemDescription": "Hair Extensions",
			"serviceItemUnitPrice":        10,
			"serviceItemLengthInMinutes": 30,
			"serviceItemCartQty": 0,
			"serviceItemNotes": "and up"
			}
		  ]

		,	nailsMenu: 
		 [
			{
			"userID": "TestUser",
			"serviceID": 101,
			"serviceCategory": "Nails",
			"serviceName": "Manicure",
			"serviceDescription": "Manicure",
			"serviceItemId": 101,
			"serviceItemDescription":  "Manicure",
			"serviceItemUnitPrice": 11,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes":""
			},
			{
			"userID": "TestUser",
			"serviceID": 102,
			"serviceCategory": "Nails",
			"serviceName": "Pedicure",
			"serviceDescription": "Pedicure",
			"serviceItemId": 102,
			"serviceItemDescription":  "Pedicure",
			"serviceItemUnitPrice": 14,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 103,
			"serviceCategory": "Nails",
			"serviceName": "Spa Pedicure",
			"serviceDescription": "Spa Pedicure",
			"serviceItemId": 103,
			"serviceItemDescription":  "Spa Pedicure",
			"serviceItemUnitPrice": 17,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 104,
			"serviceCategory": "Nails",
			"serviceName": "Manicure & Pedicure",
			"serviceDescription": "Manicure & Pedicure",
			"serviceItemId": 104,
			"serviceItemDescription":  "Manicure & Pedicure",
			"serviceItemUnitPrice": 23,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 105,
			"serviceCategory": "Nails",
			"serviceName": "Manicure & Spa Pedicure",
			"serviceDescription": "Manicure & Spa Pedicure",
			"serviceItemId": 105,
			"serviceItemDescription":  "Manicure & Spa Pedicure",
			"serviceItemUnitPrice": 26,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 106,
			"serviceCategory": "Nails",
			"serviceName": "White tip",
			"serviceDescription": "White tip",
			"serviceItemId": 106,
			"serviceItemDescription":  "White tip",
			"serviceItemUnitPrice": 26,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 107,
			"serviceCategory": "Nails",
			"serviceName": "Silk Wrap",
			"serviceDescription": "Silk Wrap",
			"serviceItemId": 107,
			"serviceItemDescription":  "Silk Wrap",
			"serviceItemUnitPrice": 26,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 108,
			"serviceCategory": "Nails",
			"serviceName": "Pink & White Power",
			"serviceDescription": "Silk Wrap",
			"serviceItemId": 108,
			"serviceItemDescription":  "Silk Wrap",
			"serviceItemUnitPrice": 26,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 109,
			"serviceCategory": "Nails",
			"serviceName": "Gel Gelish",
			"serviceDescription": "Gelish",
			"serviceItemId": 109,
			"serviceItemDescription":  "Silk Wrap",
			"serviceItemUnitPrice": 26,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 109,
			"serviceCategory": "Nails",
			"serviceName": "Gel Gelish",
			"serviceDescription": "Gelish",
			"serviceItemId": 109,
			"serviceItemDescription":  "Silk Wrap",
			"serviceItemUnitPrice": 26,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
			},
			{
			"userID": "TestUser",
			"serviceID": 110,
			"serviceCategory": "Nails",
			"serviceName": "Get Powder",
			"serviceDescription": "Get Powder",
			"serviceItemId": 110,
			"serviceItemDescription":  "Silk Wrap",
			"serviceItemUnitPrice": 25,
			"serviceItemLengthInMinute": 30, 
			"serviceItemCartQty": 0,
			"serviceItemNotes": ""
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
        var sqlStatement; 
		sqlite.db.transaction(function(tx) {

            console.log("create tb_serviceItem table if it doesn't already exist");
            sqlStatement =                 "CREATE TABLE IF NOT EXISTS tb_serviceItem "
            sqlStatement = sqlStatement +  "(userID TEXT, serviceID INTEGER, serviceCategory TEXT,serviceName TEXT, serviceDescription TEXT,  "
            sqlStatement = sqlStatement +  "serviceItemId INTEGER, serviceItemDescription TEXT, serviceItemUnitPrice REAL, serviceItemLengthInMinutes INTEGER,  "
            sqlStatement = sqlStatement +  "serviceItemCartQty INTEGER, serviceItemNotes TEXT, serviceItemTimeStamp TEXT)  "
			tx.executeSql(sqlStatement  , []);

            console.log("create tb_serviceItemHistory table if it doesn't already exist");
			//tx.executeSql("CREATE TABLE IF NOT EXISTS tb_serviceItemHistory (id INTEGER PRIMARY KEY AUTOINCREMENT, userID TEXT, serviceID INTEGER,serviceCategory TEXT,serviceName TEXT,serviceItemId INTEGER,serviceItemDescription TEXT,serviceItemUnitPrice REAL,serviceItemQty INTEGER,serviceItemSubTotal REAL,serviceItemExtra REAL,serviceItemTotal REAL,serviceItemTimeStamp TEXT) "  , []);
            sqlStatement =                 "CREATE TABLE IF NOT EXISTS tb_serviceItemHistory  "
            sqlStatement = sqlStatement +  "(id INTEGER PRIMARY KEY AUTOINCREMENT, userID TEXT, 	";
            sqlStatement = sqlStatement +  " serviceID INTEGER,serviceCategory TEXT,serviceName TEXT,	";
            sqlStatement = sqlStatement +  " serviceItemId INTEGER,serviceItemDescription TEXT,serviceItemUnitPrice REAL,	";
            sqlStatement = sqlStatement +  " serviceItemQty INTEGER,serviceItemSubTotal REAL,serviceItemExtra REAL,serviceItemTotal REAL,	";
            sqlStatement = sqlStatement +  " serviceItemTimeStamp TEXT)  	";			
            tx.executeSql(sqlStatement  , []);
            

			console.log("check to see if we already have records in the tb_serviceItem table - it not, populate with default values");
			tx.executeSql("SELECT * FROM tb_serviceItem", [],
						  checkServiceItemCount,
						  logErrorcheckServiceItemCount);
            
			//alert("check to see if we already have records in our table - it not, populate with default values");
			console.log("check to see if we already have records in the tb_serviceItemHistory table - it not, populate with default values");
			tx.executeSql("SELECT * FROM tb_serviceItemHistory", [],
						  checkServiceItemHistoryCount,
						  logError);
		});
	}

	var checkServiceItemCount = function (tx, rs) {
		var self = this;
        
		if (rs.rows.length == 0) {
			$.each(menuData.facialMenu, function(index, data) {
				self.sqlite.insertServiceMenuRecord( data.userID, data.serviceID, data.serviceCategory, data.serviceName, data.serviceDescription, data.serviceItemId, data.serviceItemDescription, data.serviceItemUnitPrice, data.serviceItemLengthInMinutes, data.serviceItemCartQty, data.serviceItemNotes );
			});
		}
        
		///getServiceItemHistory(); // load our home view with our newly inserted list of subreddits
	}
    
    
	var checkServiceItemHistoryCount = function (tx, rs) {
		var self = this;
		if (rs.rows.length == 0) {
			$.each(defaultData.serviceItems, function(index, data) {
                console.log("checkServiceItemHistoryCount inserting " + data.serviceItemDescription);
				self.sqlite.insertServiceItemHistoryRecord(data.serviceItemDescription, data.serviceItemQty);
			});
		}
        
		///getServiceItemHistory(); // load our home view with our newly inserted list of subreddits
	}
    
	var logSuccess = function(tx) {
		console.log("SQLite Query Executed: " + tx);
	}
    
	var logErrorcheckServiceItemCount = function(tx, e) {
		console.log("SQLite Error: checkServiceItemCount " + e);
	}

	var logError = function(tx, e) {
		console.log("SQLite Error: checkServiceItemHistoryCount " + e);
	}
    
	var insertServiceMenuRecord = function(userID, serviceID, serviceCategory, serviceName, serviceDescription, 
                        serviceItemId, serviceItemDescription, serviceItemUnitPrice, serviceItemLengthInMinutes, 
                        serviceItemCartQty, serviceItemNotes) {
        console.log("insertServiceMenuRecord " + serviceItemDescription );
        var sql;
        sql = "INSERT INTO tb_serviceItem (";
        sql = sql + " userID, serviceID, serviceCategory, serviceName, serviceDescription, serviceItemId, ";
        sql = sql + " serviceItemDescription, serviceItemUnitPrice,";
        sql = sql + " serviceItemLengthInMinutes, serviceItemCartQty, serviceItemNotes ) ";
        sql = sql + " VALUES (?,?,?, ?,?,?, ?,?,? ,?,?) ";
        console.log(" sql =  " + sql );
		sqlite.db.transaction(function(tx) {
			tx.executeSql(sql, 
                          [userID, serviceID, serviceCategory, serviceName, serviceDescription, serviceItemId, serviceItemDescription, serviceItemUnitPrice, serviceItemLengthInMinutes, serviceItemCartQty, serviceItemNotes] ,
						  logSuccess,
						  logError);
		});
	}
    
	var insertServiceItemHistoryRecord = function(serviceItemDescription, serviceItemQty) {
        console.log("insertServiceItemHistoryRecord " + serviceItemDescription + " " + serviceItemQty);
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

	var logHairMenuError = function(tx, e) {
		console.log("SQLite Error: checkServiceItemHistoryCount " + e);
	}
    var selectHairMenu = function(fn) {
        console.log("  --> selectHairMenu");
        sqlite.db.transaction(function(tx) {
            //tx.executeSql("SELECT * FROM tb_serviceItemHistory ORDER BY id", [],
            tx.executeSql("SELECT * FROM tb_serviceItem  ", [],
                          fn,
					      logHairMenuError);
	    });
    }   
    
	return {
		init: init,
		logSuccess: logSuccess,
		logError : logError,
        insertServiceMenuRecord: insertServiceMenuRecord,
		insertServiceItemHistoryRecord: insertServiceItemHistoryRecord,
		deleteRecord: deleteRecord,
        selectHairMenu: selectHairMenu,
        selectAllServiceItemHistory: selectAllServiceItemHistory
	}
}();