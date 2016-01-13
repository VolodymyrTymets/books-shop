Template.Book.helpers({
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
    },
    'userRating': function () {
        var bookRating =  Books.findOne({_id:this._id}).rating ? Books.findOne({_id:this._id}).rating : [];
        var userRating = _.find(bookRating,function(item){return item.userId === Meteor.userId()});
        return  userRating.value;
    }
});

Template.Book.events({
    'click #rating':function (e,tmp){
        var value = $('#rating').data('userrating');

        Meteor.call('setBookRating', tmp.data._id,value, function (err, res) {
            if (err) {
                sAlert.error(err.message);
            } else {
                sAlert.success(TAPi18n.__('add_rating'));
            }
        });
    }
})