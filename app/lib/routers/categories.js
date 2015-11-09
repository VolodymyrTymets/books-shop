Router.route('categories',{
    path:'/categories',
    template:'Categories'
    //controller:Authorized,
    //onBeforeAction: function () {
    //    if (!Admin())
    //        this.next();
    //    else
    //        this.render('AccessForbidden');
    //},
    //waitOn:function () {
    //    return Meteor.subscribe('categories',{});
    //}
});
