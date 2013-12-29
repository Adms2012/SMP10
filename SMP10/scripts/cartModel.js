(function (global) {

    var cartAggregates,
        cartItems,
        app = global.app = global.app || {};    
    
    cartAggregates = kendo.observable({
        totalAmt: 0,
        totalQty: 0,
        formattedTotal: function () {
            return kendo.toString(this.get("totalAmt"), "c");
        },
        formattedTotalWithQty: function () {
            var msg;
            msg = kendo.toString(this.get("totalQty")) + " @ " + kendo.toString(this.get("totalAmt"), "c");
            return msg;
        }
    });
    
    cartItems = new kendo.data.DataSource({
            data: [],
            change: function () {
                var totalPrice = 0;
                var totalCount = 0;
                var serviceItems = cartItems.data();
                for (var i = 0; i < serviceItems.length; i++) {
                    var cartEntry = serviceItems[i];
                    totalPrice += cartEntry.get("qty") * cartEntry.get("serviceItem.serviceItemUnitPrice");
                    totalCount += cartEntry.get("qty");
                }
                cartAggregates.set("totalAmt", totalPrice);
                cartAggregates.set("totalQty", totalCount);
            },
            schema: {
                model: {
                    fields: {
                        qty: { type: "number", min: 1, max: 99 },
                        deleteMode: { type: "boolean" },
                        serviceItem: {}
                    }
                }
            },
            aggregate: [{field: "qty", aggregate: "sum"}]
        }),

        findserviceItem = function (serviceItemId) {
            var data = cartItems.data();
            for(var i = 0; i < data.length; i++) {
                if(data[i].serviceItem.serviceItemId === serviceItemId) {
                    return data[i];
                }
            }
            return undefined;
        },

        addserviceItem = function (serviceItem) {
            //alert('addserviceItem');
            var existing = findserviceItem(serviceItem.serviceItemId);
            if(existing) {
                existing.set("qty", existing.qty + 1);
            } else {
                cartItems.add({ serviceItem: $.extend(true, {}, serviceItem), qty: 1, deleteMode: false });
            }
        },

        clear = function () {
            alert('clear');
            for(var i = cartItems.data().length - 1; i >= 0; i--) {
                cartItems.remove(cartItems.data()[i]);
            }
        };

    app.cart = {
        items: cartItems,
        add: addserviceItem,
        find: findserviceItem,
        aggregates: cartAggregates,
        clear: clear
    };
})(window);    