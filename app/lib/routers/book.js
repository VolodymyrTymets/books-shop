Router.route('book',{
    path:'/book/:_id',
    template:'Book',
    controller:BaseController,
    waitOn:function () {
        return Meteor.subscribe('books',{_id:this.params._id});
    },
    data:function () {
        return Books.findOne({_id:this.params._id});
    }
});


