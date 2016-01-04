Router.route('journal/edit',{
    path:'/journal/edit/:_id',
    template:'JournalEdit',
    controller:AdminController,
    waitOn:function () {
        return [
            Meteor.subscribe('authors',{}),
            Meteor.subscribe('categories',{}),
            Meteor.subscribe('journals',{_id:this.params._id})
        ];
    },
    data:function () {
        return Journals.findOne({_id:this.params._id});
    }
});

