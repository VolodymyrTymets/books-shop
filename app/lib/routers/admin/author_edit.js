Router.route('author/edit',{
    path:'/author/edit/:_id',
    template:'AuthorEdit',
    controller:AdminController,
    waitOn:function () {
        return Meteor.subscribe('authors',{_id:this.params._id});
    },
    data:function () {
        return Authors.findOne({_id:this.params._id});
    }
});

