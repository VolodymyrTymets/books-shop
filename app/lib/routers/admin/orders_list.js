Router.route('orderList',{
    path:'/order-list',
    template:'OrderList',
    //controller:Authorized,
    //onBeforeAction: function () {
    //    if (!Admin())
    //        this.next();
    //    else
    //        this.render('AccessForbidden');
    //},
    waitOn:function () {
        return [
                Meteor.subscribe('books',{}),
                Meteor.subscribe('users',{})
            ];
    }
});
