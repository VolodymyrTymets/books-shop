Router.route('categoryJournals',{
    path:'journals/category/:_categoryId',
    template:'CategoryJournals',
    controller:BaseController,
    waitOn:function () {
        return  Meteor.subscribe('journals',{ categoriesId:this.params._categoryId })
    },
    data: function () {
        return Journals.find();
    }
})
