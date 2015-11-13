Template.BooksRowAction.events({
    'click a[data-action="remove-book"]': function (e,tmp) {
       Books.remove({_id:tmp.data._id});
    }
});