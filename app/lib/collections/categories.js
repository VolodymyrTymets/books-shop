Categories = new Mongo.Collection('categories');

Categories.allow({
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

Schemas.Category.i18n("schemas.category");
Categories.attachSchema(Schemas.Category);
