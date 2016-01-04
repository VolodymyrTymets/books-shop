Template.Journal.helpers({
    'image': function () {
        var imageId  = this.photoId ? this.photoId :'';
        return Images.findOne({ _id: imageId });
    },
    'hasPhoto': function () {
        var imageId  = this.photoId ? this.photoId :'';
        return Images.findOne({ _id: imageId }) ? true  : false;
    },
    'authors':function () {
        var authors  = '';
        Authors.find({_id:{$in:this.authorsId}}).forEach(function (author){
            authors +=  author.name + ' ' + author.surname + ', ';
        });

        return authors
    }
})