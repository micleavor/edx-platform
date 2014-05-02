/**
 * This is a simple component that renders add buttons for all available XBlock template types.
 */
define(["jquery", "underscore", "js/views/baseview"],
    function ($, _, BaseView) {
        var AddXBlockComponent = BaseView.extend({
            events: {
                "click .ui-toggle-expansion": "toggleExpandCollapse"
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this);
                this.template = this.loadTemplate('add-xblock-component');
            },

            render: function() {
                this.$el.html(this.template({ }));
            }
        });

        return AddXBlockComponent;
    }); // end define();
