Router.route('journalsList',{
    path:'/journals-list',
    template:'JournalsList',
    controller:AdminController,
    waitOn:function () {
        return [
            Meteor.subscribe('authors',{}),
            Meteor.subscribe('journals',{})
        ]
    }
});

