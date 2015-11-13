Router.route('home',{
    path:'/',
    template:'Home',
    controller:BaseController,
    waitOn:function () {
        return  Meteor.subscribe('books',{})
    },
    data: function () {
        return Books.find();
    }
})