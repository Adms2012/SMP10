(function (global) {
    var facialMenuViewModel,
        app = global.app = global.app || {};

    facialMenuViewModel = kendo.data.ObservableObject.extend({
        facialMenuDataSource: null,

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

            that.set("facialMenuDataSource", dataSource);
        }
    });

    app.facialMenu = {
        viewModel: new facialMenuViewModel()
    };
})(window);