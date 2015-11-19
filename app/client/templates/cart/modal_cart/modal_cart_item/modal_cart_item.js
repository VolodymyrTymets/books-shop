Template.ModalCartItem.helpers({
    'title':function (){
        return Books.findOne({_id:this.bookId}).title;
    }
})