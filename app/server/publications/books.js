ReactiveTable.publish("books", Books);

Meteor.publishComposite('books', function (filter,options) {
    return {
        find: function () {
            return Books.find(filter,options);

        },
        children: [
            {
                find: function (book) {
                    return Images.find({_id: book.photoId});
                }
            },
            {
                find: function (book) {
                    return Authors.find({_id: { $in: book.authorsId }});
                }
            },
            {
                find: function (book) {
                    return Categories.find({_id:{ $in: book.categoriesId }});
                }
            }
        ]
    }
});

Meteor.publishComposite('searchBooks', function (query) {
    return {
        find: function () {
            return Books.find(
                { $text: {
                    $search: query
                    }
                },
                {
                    fields: {
                        score: {
                            $meta: 'textScore'
                        }
                    },
                    sort: {
                        score: {
                            $meta: 'textScore'
                        }
                    }
                }
            );

        },
        children: [
            {
                find: function (book) {
                    return Images.find({_id: book.photoId});
                }
            },
            {
                find: function (book) {
                    return Authors.find({_id: { $in: book.authorsId }});
                }
            },
            {
                find: function (book) {
                    return Categories.find({_id:{ $in: book.categoriesId }});
                }
            }
        ]
    }
});