Template.ModalCartItem.helpers({
    'title':function (){
        return Books.findOne({_id:this.bookId}).title;
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
