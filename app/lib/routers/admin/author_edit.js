Router.route('author/edit',{
    path:'/author/edit/:_id',
    template:'AuthorEdit',
    //controller:Authorized,
    //onBeforeAction: function () {
    //    if (!Admin())
    //        this.next();
    //    else
    //        this.render('AccessForbidden');
    //},
    waitOn:function () {
        return Meteor.subscribe('authors',{_id:this.params._id});
    },
    data:function () {
        return Authors.findOne({_id:this.params._id});
    }
});

