(function (global)  {
    return {
        onShow: function (e) {
            var btnGrp = $(e.sender.element).find(".select-group").data("kendoMobileButtonGroup");
            if(btnGrp) {
                btnGrp.select(0);
            }
        },
        
        viewModel: kendo.observable({
            hairServices: data.hairServicesList
        })
    };
}) (window) ;