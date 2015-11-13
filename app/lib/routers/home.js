Router.route('home',{
    path:'/',
    template:'Home',
    waitOn:function () {
        return  Meteor.subscribe('books',{})
    },
    data: function () {
        return Books.find();
    }
})