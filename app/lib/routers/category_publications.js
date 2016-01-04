Router.route('categoryPublications',{
    path:'publications/category/:_categoryId',
    template:'CategoryPublications',
    controller:BaseController,
    waitOn:function () {
        return  Meteor.subscribe('_publications',{ categoriesId:this.params._categoryId })
    },
    data: function () {
        return Publications.find();
    }
})
