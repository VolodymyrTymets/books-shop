Router.route('journal',{
    path:'/journal/:_id',
    template:'Journal',
    controller:BaseController,
    waitOn:function () {
        return Meteor.subscribe('journals',{_id:this.params._id});
    },
    data:function () {
        return Journals.findOne({_id:this.params._id});
    }
});

