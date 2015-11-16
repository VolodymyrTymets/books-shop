Router.route('category/edit',{
    path:'/category/edit/:_id',
    template:'CategoryEdit',
    controller:AdminController,
    waitOn:function () {
        return Meteor.subscribe('categories',{_id:this.params._id});
    },
    data:function () {
        return Categories.findOne({_id:this.params._id});
    }
});
