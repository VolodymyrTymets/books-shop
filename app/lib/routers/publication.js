Router.route('publication',{
    path:'/publication/:_id',
    template:'publication',
    controller:BaseController,
    waitOn:function () {
        return Meteor.subscribe('_publication',{_id:this.params._id});
    },
    data:function () {
        return Publications.findOne({_id:this.params._id});
    }
});

