AdminController = AuthorizedController.extend({
    onBeforeAction: function () {
        if (AdminPermission())
            this.next();
        else
            this.render('AccessForbidden');
    },
    waitOn:function(){
        return Meteor.subscribe('images');
    }
});