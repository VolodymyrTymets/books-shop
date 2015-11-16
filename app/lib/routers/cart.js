Router.route('cart',{
    path:'/cart/',
    template:'Cart',
    controller:AuthorizedController,
    waitOn:function () {
        var subs = [];
        Cart.find().forEach(function (cartItem) {
            subs.push(Meteor.subscribe('books',{ _id:cartItem.bookId }));
        })
        return subs;
    },
    data: function () {
        return Books.find();
    }
})
