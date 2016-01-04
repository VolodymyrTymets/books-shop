Router.route('publication/edit',{
    path:'/publication/edit/:_id',
    template:'PublicationEdit',
    controller:AdminController,
    waitOn:function () {
        return [
            Meteor.subscribe('authors',{}),
            Meteor.subscribe('categories',{}),
            Meteor.subscribe('_publications',{_id:this.params._id})
        ];
    },
    data:function () {
        return Publications.findOne({_id:this.params._id});
    }
});

