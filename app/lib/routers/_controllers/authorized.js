AuthorizedController = RouteController.extend({
    onBeforeAction: function () {
        if (Meteor.user())
            this.next();
        else
            this.render('AccessForbidden');
    }
});