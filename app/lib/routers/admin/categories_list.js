Router.route('categoriesList',{
    path:'/categories-list',
    template:'CategoriesList'
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
