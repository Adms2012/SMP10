(function (global) {
    var hairMenuViewModel,
        app = global.app = global.app || {};

    hairMenuViewModel = kendo.data.ObservableObject.extend({
        hairMenuDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/hairMenu.json",
                        dataType: "json"
                    }
                }
            });

            that.set("hairMenuDataSource", dataSource);
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
    

   
    app.hairMenu = {
        viewModel: new hairMenuViewModel()
    };
    
})(window);