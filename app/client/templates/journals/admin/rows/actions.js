Template.JournalsRowAction.events({
    'click a[data-action="remove-journal"]': function (e,tmp) {
       Journals.remove({_id:tmp.data._id});
    }
});