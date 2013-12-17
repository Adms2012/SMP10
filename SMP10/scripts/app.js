(function (global) {
    var mobileSkin = "",
        app = global.app = global.app || {};

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        $(document.body).height(window.innerHeight);
    }, false);

    var _onError = function (error, url, line) {
        app.utils.showError(error);
    };
    window.onerror = _onError;
    
    app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout",
                                                                    transition: "fade",
                                                                    // initial: "hairServices-view",
                                                                 loading: '<h1 class="loading-message">Loading...</h1>'      
                                                                } );
    app.utils.init(app.application);
    
    app.cart.items.bind("change", function () { app.utils.updateCartBadges($, app.cart); });
     
    app.onAddServiceItemToCart = function (clickEvt) {
                alert('click');
                var serviceItem = clickEvt.data;
                app.cart.add(serviceItem);

                // force refresh of data bindings.
                var aid = serviceItem.get("serviceItemId");
                serviceItem.set("serviceItemId", -1);
                serviceItem.set("serviceItemId", aid);
            };   
    
    app.changeSkin = function (e) {
        if (e.sender.element.text() === "Flat") {
            e.sender.element.text("Native");
            mobileSkin = "flat";
        }
        else {
            e.sender.element.text("Flat");
            mobileSkin = "";
        }

        app.application.skin(mobileSkin);
    };
})(window);