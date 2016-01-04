Router.route('publication',{
    path:'/publication/:_id',
    template:'Publication',
    controller:BaseController,
    waitOn:function () {
        return Meteor.subscribe('_publications',{_id:this.params._id});
    },
    data:function () {
        return Publications.findOne({_id:this.params._id});
    }
});

