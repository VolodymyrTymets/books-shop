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

Categories.attachSchema(Schemas.Category);