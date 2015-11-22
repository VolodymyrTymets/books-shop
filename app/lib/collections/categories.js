Categories = new Mongo.Collection('categories');

Categories.allow({
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

Schemas.Category.i18n("schemas.category");
Categories.attachSchema(Schemas.Category);
