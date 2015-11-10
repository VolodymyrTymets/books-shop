Authors = new Mongo.Collection('authors');

Authors.allow({
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

Schemas.Author.i18n("schemas.author");
Authors.attachSchema(Schemas.Author);
