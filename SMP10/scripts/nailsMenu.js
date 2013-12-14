(function (global) {
    var nailsMenuViewModel,
        app = global.app = global.app || {};

    nailsMenuViewModel = kendo.data.ObservableObject.extend({
        nailsMenuDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/nailsMenu.json",
                        dataType: "json"
                    }
                }
            });

            that.set("nailsMenuDataSource", dataSource);
        }
    });

    app.nailsMenu = {
        viewModel: new nailsMenuViewModel()
    };
})(window);