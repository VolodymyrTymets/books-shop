Router.route('orderList',{
    path:'/order-list',
    template:'OrderList',
    controller:AdminController,
    waitOn:function () {
        return [
                Meteor.subscribe('books',{}),
                Meteor.subscribe('users',{})
            ];
    }
});
