BaseController = RouteController.extend({
    waitOn:function () {
        return  Meteor.subscribe('categories',{})
    }
});