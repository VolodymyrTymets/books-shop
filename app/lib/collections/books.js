Books = new Mongo.Collection('books');
if(Meteor.isServer) {
    Books._ensureIndex({
        'title': 'text',
        'description': 'text'
    });
}

Books.allow({
    insert: function (userId, obj) {
        return AdminPermission(userId);
    },
    update: function (userId, obj) {
        return AdminPermission(userId);
    },
    remove: function (userId, obj) {
        return AdminPermission(userId);
    }
});

Schemas.Book.i18n("schemas.book");
Books.attachSchema(Schemas.Book);
