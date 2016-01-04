Template.PublicationsRowAction.events({
    'click a[data-action="remove-publication"]': function (e,tmp) {
        Publications.remove({_id:tmp.data._id});
    }
});