Template.OrdersRowAction.events({
    'click a[data-action="remove-order"]': function (e,tmp) {
        Orders.remove({_id:tmp.data._id});
    }
});