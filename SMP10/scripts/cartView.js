(function (global) { 
    
    var _view,
        app = global.app = global.app || {};    
    
    var _scrollToTopIfTooFewItemsInCart = function () {
        alert('_scrollToTopIfTooFewItemsInCart');
        if(_view.scrollerContent.height() < _view.scroller.element.height()) {
            app.utils.scrollViewToTop(_view.element);
        }
    };

    var onRemove = function (clickEvt) {
            //alert('onRemove');
            var element = clickEvt.sender.element;
            var li = element.parents("li");
            var uid = li.data("uid");
            
            var animation = {
                "opacity": 0
            };

            li.animate(animation,
                300,
                function () {
                    app.cart.items.remove(app.cart.items.getByUid(uid));
                    _scrollToTopIfTooFewItemsInCart();
                });
        },

        onToggleDeleteMode = function (evt) {
            alert('onToggleDeleteMode');
            var element = evt.sender.element;
            var li = element.parents("li");
            var uid = li.data("uid");
            var cartItem = app.cart.items.getByUid(uid);

            cartItem.set("deleteMode", !cartItem.deleteMode);
        },

        viewModel = kendo.observable({
            items: app.cart.items,
            cartHasItems: false,
            cart: app.cart,

            isAndroid: function () {
                return $("body").hasClass("km-android");
            },
            serviceItemPrice: function (cartItem) {
                return kendo.toString(parseFloat(cartItem.serviceItem.get("serviceItemUnitPrice")), "c");
            },
            serviceItemPriceCurrrency: function (cartItem) {
                return kendo.toString(parseFloat(cartItem.serviceItem.get("serviceItemUnitPrice")), "c");
            },
            serviceItemArtUrl: function (cartItem) {
                return ""; //config.serverUrl + cartItem.serviceItem.get("serviceItemArtUrl");
            },
            serviceItemSubtotal: function (cartItem) {
                return kendo.toString(parseFloat(cartItem.serviceItem.get("serviceItemUnitPrice")) * cartItem.get("qty"), "c");
            }
        }),

        init = function (initEvt) {
            _view = initEvt.view
            viewModel.set("cartHasItems", app.cart.items.view().length > 0);
            app.cart.items.bind("change", function () {
                viewModel.set("cartHasItems", app.cart.items.view().length > 0);
            });
        },

        layoutShow = function () {
            utils.updateCartBadges($, cart);
        };


    app.cartView = {
        init: init,
        layoutShow: layoutShow,
        onRemove: onRemove,
        onToggleDeleteMode: onToggleDeleteMode,
        viewModel: viewModel    
    };
    
})(window);        