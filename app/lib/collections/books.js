Books = new Mongo.Collection('books');
if(Meteor.isServer) {
    Books._ensureIndex({
        'title': 'text',
        'description': 'text'
    });
}

Books.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Schemas.Book.i18n("schemas.book");
Books.attachSchema(Schemas.Book);
