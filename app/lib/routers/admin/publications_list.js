Router.route('publicationsList',{
    path:'/publications-list',
    template:'PublicationsList',
    controller:AdminController,
    waitOn:function () {
        return [
            Meteor.subscribe('authors',{}),
            Meteor.subscribe('_publications',{})
        ]
    }
});

