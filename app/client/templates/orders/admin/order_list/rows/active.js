Template.OrdersRowAcrive.events({
    'change [data-action="change-active"]':function (e,tmp){
        var val = $(e.target).is(':checked');
        Orders.update({_id:tmp.data._id},{$set:{ 'active':val }})
    }
})