Meteor.methods({
    'setBookRating': function (bookId,value) {
        if(!Meteor.userId() || !Books.findOne({_id:bookId}) ) return;
        var bookRating =  Books.findOne({_id:bookId}).rating ? Books.findOne({_id:bookId}).rating : [];
        var userRating = _.find(bookRating,function(item){return item.userId === Meteor.userId()});
        if (userRating){
            for(var i = 0;i < bookRating.length;i++){
                if(bookRating[i].userId === Meteor.userId()){
                    bookRating[i].value =value;
                }
            }
        }else{
            bookRating.push({
                userId: Meteor.userId(),
                value:value
            })
        }
       return Books.update({_id:bookId},  { $set: {rating:bookRating} });
    }
});