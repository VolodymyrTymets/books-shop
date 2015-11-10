Template.Book.helpers({
    'image': function () {
        var imageId  = this.fotoId ? this.fotoId :'';
        return Images.findOne({ _id: imageId });
    }
})