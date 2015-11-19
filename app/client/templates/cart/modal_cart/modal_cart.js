Template.ModalCart.helpers({
    'deliveryTypes':function () {
        return [
            {
                value:"np",
                text:TAPi18n.__('delivery_type_np')
            },
            {
                value:"up",
                text:TAPi18n.__('delivery_type_up')
            }
        ];
    },
    'baysCount':function () {
        return Cart.find().count();
    },
    'userAddress': function () {
        $('[data-name="delivery-type"]').val(Meteor.user().profile.deliveryType)
        return Meteor.user().profile.deliveryAddress;
    },
    'items': function () {
        return Cart.find();
    }
});
Template.ModalCart.events({
    'blur input[data-name="delivery-address"]':function(e,tmp){
        if(Meteor.userId()){
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.deliveryAddress": e.target.value}});
        }
    },
    'change [data-name="delivery-type"]':function(e,tmp){
        if(Meteor.userId()){
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.deliveryType": e.target.value}});
        }
    },
    'click [data-action="by-now"]':function(e,tmp){
        e.preventDefault();
        if(Cart.find().count() > 0){
            Meteor.call('saveOrders',Cart.find().fetch(),function (err,res){
                if(err){
                    sAlert.error(err.message);
                }else{
                    Cart.remove({});
                    sAlert.success(TAPi18n.__('by_success'));
                }
            })
        }else{
            sAlert.warning(TAPi18n.__('cart_empty'));
        }
    }
});
Template.ModalCart.onRendered(function () {
    $('#cart-delivery-type').val(Meteor.user().profile.deliveryType);
})