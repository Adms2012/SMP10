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
        }
    });

    app.hairMenu = {
        viewModel: new hairMenuViewModel()
    };
})(window);