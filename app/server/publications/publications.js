ReactiveTable.publish("_publications", Publications);

Meteor.publishComposite('_publications', function (filter,options) {
    return {
        find: function () {
            return Publications.find(filter,options);

        },
        children: [
            {
                find: function (publication) {
                    return Images.find({_id: publication.photoId});
                }
            },
            {
                find: function (publication) {
                    return Authors.find({_id: { $in: publication.authorsId }});
                }
            },
            {
                find: function (publication) {
                    return Categories.find({_id:{ $in: publication.categoriesId }});
                }
            }
        ]
    }
});

Meteor.publishComposite('searchPublications', function (query) {
    return {
        find: function () {
            return Publications.find(
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
                find: function (publication) {
                    return Images.find({_id: publication.photoId});
                }
            },
            {
                find: function (publication) {
                    return Authors.find({_id: { $in: publication.authorsId }});
                }
            },
            {
                find: function (publication) {
                    return Categories.find({_id:{ $in: publication.categoriesId }});
                }
            }
        ]
    }
});