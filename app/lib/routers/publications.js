Router.route('publications',{
    path:'/publications',
    template:'Publications',
    controller:BaseController,
    waitOn:function () {
        return Meteor.subscribe('_publications',{});
    },
    data:function () {
        return Publications.find({});
    }
});

