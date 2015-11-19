Categories = new Mongo.Collection('categories');

Categories.allow({
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

Schemas.Category.i18n("schemas.category");
Categories.attachSchema(Schemas.Category);
