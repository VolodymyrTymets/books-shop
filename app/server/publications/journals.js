ReactiveTable.publish("journals", Journals);

Meteor.publishComposite('journals', function (filter,options) {
    return {
        find: function () {
            return Journals.find(filter,options);

        },
        children: [
            {
                find: function (journal) {
                    return Images.find({_id: journal.photoId});
                }
            },
            {
                find: function (journal) {
                    return Authors.find({_id: { $in: journal.authorsId }});
                }
            },
            {
                find: function (journal) {
                    return Categories.find({_id:{ $in: journal.categoriesId }});
                }
            }
        ]
    }
});

Meteor.publishComposite('searchJournals', function (query) {
    return {
        find: function () {
            return Journals.find(
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
                find: function (journal) {
                    return Images.find({_id: journal.photoId});
                }
            },
            {
                find: function (journal) {
                    return Authors.find({_id: { $in: journal.authorsId }});
                }
            },
            {
                find: function (journal) {
                    return Categories.find({_id:{ $in: journal.categoriesId }});
                }
            }
        ]
    }
});