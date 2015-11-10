Meteor.publish("authors", function(filter,options) {
    return Authors.find(filter, options);
});

ReactiveTable.publish('authors', Authors);

Meteor.publishComposite('singleAuthor', function (authorId) {
    return {
        find: function () {
            return Authors.find({_id:authorId});

        },
        children: [
            {
                    find: function (author) {
                        return Images.find({_id: author.fotoId});
                    }
            }
        ]
    }
});