Template.ModalCartItem.helpers({
    'title':function (){
        return Books.findOne({_id:this.bookId}) ? Books.findOne({_id:this.bookId}).title :'';
    },
    'price': function () {
        return Books.findOne({_id:this.bookId}) ? Books.findOne({_id:this.bookId}).price :'';
    },
    'image': function () {
        var book = Books.findOne({_id:this.bookId});
        var imageId  =(book && book.photoId) ? book.photoId :'';
        return Images.findOne({ _id: imageId });
    },
    'hasPhoto': function () {
        var book = Books.findOne({_id:this.bookId});
        var imageId  =(book && book.photoId) ? book.photoId :'';
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
