Authors = new Mongo.Collection('authors');

Authors.allow({
    insert: function (userId, obj) {
        return  AdminPermission(userId);
    },
    update: function (userId, obj) {
        return AdminPermission(userId);
    },
    remove: function (userId, obj) {
        return AdminPermission(userId);
    }
});

Schemas.Author.i18n("schemas.author");
Authors.attachSchema(Schemas.Author);
