/**
 * This is a simple component that renders add buttons for all available XBlock template types.
 */
define(["jquery", "underscore", "js/views/baseview"],
    function ($, _, BaseView) {
        var AddXBlockComponent = BaseView.extend({
            events: {
                'click .new-component .new-component-type a.multiple-templates': 'showComponentTemplates',
                'click .new-component .new-component-type a.single-template': 'saveNewComponent',
                'click .new-component .cancel-button': 'closeNewComponent',
                'click .new-component-templates .new-component-template a': 'saveNewComponent',
                'click .new-component-templates .cancel-button': 'closeNewComponent'
            },

            initialize: function(options) {
                BaseView.prototype.initialize.call(this, options);
                this.template = this.loadTemplate('add-xblock-component');
            },

            render: function() {
                if (!this.$el.html()) {
                    this.$el.html(this.template({ }));
                }
            },

            showComponentTemplates: function(event) {
                var type;
                event.preventDefault();
                event.stopPropagation();
                type = $(event.currentTarget).data('type');
                this.$('.new-component').slideUp(250);
                this.$('.new-component-' + type).slideDown(250);
                $('html, body').animate({
                    scrollTop: this.$(".new-component-" + type).offset().top
                }, 500);
            },

            closeNewComponent: function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.$('.new-component').slideDown(250);
                this.$('.new-component-templates').slideUp(250);
                this.$('.new-component-item').removeClass('adding');
                this.$('.new-component-item').find('.rendered-component').remove();
            },

            saveNewComponent: function(event) {
                this.options.createComponent($(event.currentTarget).data());
                this.closeNewComponent(event);
            }
        });

        return AddXBlockComponent;
    }); // end define();
