Router.route('author',{
    path:'/author/:_id',
    template:'Author',
    controller:BaseController,
    waitOn:function () {
        return Meteor.subscribe('singleAuthor',this.params._id);
    },
    data:function () {
        return Authors.findOne({_id:this.params._id});
    }
});

