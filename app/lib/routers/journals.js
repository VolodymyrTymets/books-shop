Router.route('journals',{
    path:'/journals',
    template:'Journals',
    controller:BaseController,
    waitOn:function () {
        return Meteor.subscribe('journals',{});
    },
    data:function () {
        return Journals.find({});
    }
});

