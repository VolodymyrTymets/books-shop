Template.ModalCartItem.helpers({
    'item':function (){
        return  Books.findOne({_id:this.bookId}) ?
            Books.findOne({_id:this.bookId}) :
            Journals.findOne({_id:this.bookId});
    },
    'image': function () {
        var item = Books.findOne({_id:this.bookId}) ? Books.findOne({_id:this.bookId}) : Journals.findOne({_id:this.bookId});
        var imageId  =(item && item.photoId) ? item.photoId :'';
        return Images.findOne({ _id: imageId });
    },
    'hasPhoto': function () {
        var item = Books.findOne({_id:this.bookId}) ? Books.findOne({_id:this.bookId}) : Journals.findOne({_id:this.bookId});
        var imageId  =(item && item.photoId) ? item.photoId :'';
        return Images.findOne({ _id: imageId }) ? true  : false;
    }
});
Template.ModalCartItem.events({
    'click [data-action="remove-from-cart"]':function (e,tmp) {
        Cart.remove({
            bookId:tmp.data.bookId
        });
        sAlert.success(TAPi18n.__('removed_from_cart'));
    }
});
