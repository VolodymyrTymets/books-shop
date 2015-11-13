Router.route('booksList',{
    path:'/books-list',
    template:'BooksList',
    //controller:Authorized,
    //onBeforeAction: function () {
    //    if (!Admin())
    //        this.next();
    //    else
    //        this.render('AccessForbidden');
    //},
    waitOn:function () {
        return [
            Meteor.subscribe('authors',{}),
            Meteor.subscribe('categories',{})
        ]
    }
});

