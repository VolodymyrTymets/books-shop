AdminController = AuthorizedController.extend({
    onBeforeAction: function () {
        if (AdminPermission())
            this.next();
        else
            this.render('AccessForbidden');
    }
});