Router.route('book/edit',{
    path:'/book/edit/:_id',
    template:'BookEdit',
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
            Meteor.subscribe('categories',{}),
            Meteor.subscribe('books',{_id:this.params._id})
        ];
    },
    data:function () {
        return Books.findOne({_id:this.params._id});
    }
});

