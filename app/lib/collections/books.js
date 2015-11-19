Books = new Mongo.Collection('books');
if(Meteor.isServer) {
    Books._ensureIndex({
        'title': 'text',
        'description': 'text'
    });
}

Books.allow({
    insert: function () {
        return AdminPermission();
    },
    update: function () {
        return AdminPermission();
    },
    remove: function () {
        return AdminPermission();
    }
});

Schemas.Book.i18n("schemas.book");
Books.attachSchema(Schemas.Book);
