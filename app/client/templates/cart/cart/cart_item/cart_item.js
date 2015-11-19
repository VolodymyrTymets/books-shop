Template.CartItem.helpers({
    'image': function () {
        var imageId  = this.photoId ? this.photoId :'';
        return Images.findOne({ _id: imageId });
    },
    'hasPhoto': function () {
        var imageId  = this.photoId ? this.photoId :'';
        return Images.findOne({ _id: imageId }) ? true  : false;
    }
});

Template.CartItem.events({
    'click [data-action="remove-from-cart"]':function (e,tmp) {
            Cart.remove({
                bookId:tmp.data._id
            });
            sAlert.success(TAPi18n.__('removed_from_cart'));
    }
});
