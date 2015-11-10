Router.route('author',{
    path:'/author/:_id',
    template:'Author',
    //controller:Authorized,
    //onBeforeAction: function () {
    //    if (!Admin())
    //        this.next();
    //    else
    //        this.render('AccessForbidden');
    //},
    waitOn:function () {
        return Meteor.subscribe('singleAuthor',this.params._id);
    },
    data:function () {
        return Authors.findOne({_id:this.params._id});
    }
});

