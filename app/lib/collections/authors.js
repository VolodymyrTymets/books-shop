Authors = new Mongo.Collection('authors');

Authors.allow({
    insert: function () {
        return  AdminPermission();
    },
    update: function () {
        return AdminPermission();
    },
    remove: function () {
        return AdminPermission();
    }
});

Schemas.Author.i18n("schemas.author");
Authors.attachSchema(Schemas.Author);
