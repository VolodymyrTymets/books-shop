Router.route('categoryBooks',{
    path:'books/category/:_categoryId',
    template:'CategoryBooks',
    controller:BaseController,
    waitOn:function () {
        return  Meteor.subscribe('books',{ categoriesId:this.params._categoryId })
    },
    data: function () {
        return Books.find();
    }
})
