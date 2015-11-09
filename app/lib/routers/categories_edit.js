Router.route('category/edit',{
    path:'/category/edit/:_id',
    template:'CategoryEdit',
    //controller:Authorized,
    //onBeforeAction: function () {
    //    if (!Admin())
    //        this.next();
    //    else
    //        this.render('AccessForbidden');
    //},
    waitOn:function () {
        return Meteor.subscribe('categories',{_id:this.params._id});
    },
    data:function () {
        return Categories.findOne({_id:this.params._id});
    }
});
