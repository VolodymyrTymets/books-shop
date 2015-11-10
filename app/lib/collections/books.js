Books = new Mongo.Collection('books');

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

Books.attachSchema(Schemas.Book);
