(function (global) {
    var serviceMenuViewModel,
        app = global.app = global.app || {};

    serviceMenuViewModel = kendo.data.ObservableObject.extend({
        hairMenuDataSource: null,
        nailsMenuDataSource: null,
        facialMenuDataSource: null,

        init: function () {
            console.log("serviceMenuViewModel.init");
            var that = this,
                dataSourceHair,
                dataSourceNails,
                dataSourceFacial;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSourceHair = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/hairMenu.json",
                        dataType: "json"
                    }
                }
            });
            that.set("hairMenuDataSource", dataSourceHair);

            dataSourceNails = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/nailsMenu.json",
                        dataType: "json"
                    }
                }
            });
            that.set("nailsMenuDataSource", dataSourceNails);
            
            dataSourceFacial = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/facialMenu.json",
                        dataType: "json"
                    }
                }
            });
            that.set("facialMenuDataSource", dataSourceFacial);
            
        },
        serviceItemPriceFormatted: function (cartItem) {
            return kendo.toString(parseFloat(cartItem.get("serviceItemUnitPrice")), "c");
        },        
        onAddServiceItemToCart: function (clickEvt) {
            var serviceItem = clickEvt.data;
            app.cart.add(serviceItem);

            // force refresh of data bindings.
            var aid = serviceItem.get("serviceItemId");
            //alert(aid);
            serviceItem.set("serviceItemId", -1);
            serviceItem.set("serviceItemId", aid);
        },
        qtyInCart: function (serviceItem) {
            var cartItem = app.cart.find(serviceItem.get("serviceItemId"));
            if(cartItem) {
                return cartItem.get("qty");
            } else {
                return "";
            }
        }        
      
    });
    

   
    app.serviceMenu = {
        viewModel: new serviceMenuViewModel()
    };
    
})(window);