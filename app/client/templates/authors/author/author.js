Template.Author.helpers({
    'image': function () {
        var imageId  = this.photoId ? this.photoId :'';
        return Images.findOne({ _id: imageId });
    },
    'hasPhoto': function () {
        var imageId  = this.photoId ? this.photoId :'';
        return Images.findOne({ _id: imageId }) ? true  : false;
    }
})