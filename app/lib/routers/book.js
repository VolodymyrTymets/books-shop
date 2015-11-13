Router.route('book',{
    path:'/book/:_id',
    template:'Book',
    //controller:Authorized,
    //onBeforeAction: function () {
    //    if (!Admin())
    //        this.next();
    //    else
    //        this.render('AccessForbidden');
    //},
    waitOn:function () {
        return Meteor.subscribe('books',{_id:this.params._id});
    },
    data:function () {
        return Books.findOne({_id:this.params._id});
    }
});


