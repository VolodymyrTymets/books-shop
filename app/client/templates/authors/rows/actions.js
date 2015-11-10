Template.AuthorsRowAction.events({
    'click a[data-action="remove-author"]': function (e,tmp) {
       Authors.remove({_id:tmp.data._id});
    }
});