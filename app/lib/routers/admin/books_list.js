Router.route('booksList',{
    path:'/books-list',
    template:'BooksList',
    controller:AdminController,
    waitOn:function () {
        return [
            Meteor.subscribe('authors',{}),
            Meteor.subscribe('categories',{})
        ]
    }
});

