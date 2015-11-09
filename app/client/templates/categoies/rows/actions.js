Template.CategoriesRowAction.events({
    'click a[data-action="remove-category"]': function (e,tmp) {
       Categories.remove({_id:tmp.data._id});
    }
});