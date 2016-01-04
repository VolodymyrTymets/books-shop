Template.CategoryPublications.helpers({
    'categoryName':function () {
        return Categories.findOne({_id:Router.current().params._categoryId}).name;
    },
    'hasResult':function () {
        return Publications.find().count() > 0 ? true : false;
    }
})