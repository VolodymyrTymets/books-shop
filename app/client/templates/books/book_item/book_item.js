Template.BookItem.helpers({
    'image': function () {
        var imageId  = this.photoId ? this.photoId :'';
        return Images.findOne({ _id: imageId });
    },
    'hasPhoto': function () {
        var imageId  = this.photoId ? this.photoId :'';
        return Images.findOne({ _id: imageId }) ? true  : false;
    }
});

Template.BookItem.events({
    'click [data-action="add-to-cart"]':function (e,tmp) {
        if(!Cart.findOne({bookId:tmp.data._id})){
            var user = Meteor.user();
            Cart.insert({
                bookId:tmp.data._id,
                userId:Meteor.userId(),
                deliveryAddress:user.profile.deliveryAddress,
                deliveryType:user.profile.deliveryAddress
            });
            sAlert.success(TAPi18n.__('added_to_cart'));
        }else{
            sAlert.warning(TAPi18n.__('already_in_cart'));
        }

    }
});
