Template._loginButtonsAdditionalLoggedInDropdownActions.helpers({
    'photo': function () {
        var user = Meteor.user();
        return   user.profile.photo ? user.profile.photo : '/images/noavatar.png';
    },
    'user': function () {
        return  Meteor.user();
    },
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
    }
});
Template._loginButtonsAdditionalLoggedInDropdownActions.events({
   'blur input[data-name="delivery-address"]':function(e,tmp){
       if(Meteor.userId()){
           Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.deliveryAddress": e.target.value}});
       }
   },
   'change [data-name="delivery-type"]':function(e,tmp){
       if(Meteor.userId()){
           Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.deliveryType": e.target.value}});
       }
   }
});
