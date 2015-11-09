//Template.registerHelper("Admin", function (param2) {
//    return Admin();
//});
Blaze.TemplateInstance.prototype.parentTemplate = function (levels) {
    var view = Blaze.currentView;
    if (typeof levels === "undefined") {
        levels = 1;
    }
    while (view) {
        if (view.name.substring(0, 9) === "Template." && !(levels--)) {
            return view.templateInstance();
        }
        view = view.parentView;
    }
};