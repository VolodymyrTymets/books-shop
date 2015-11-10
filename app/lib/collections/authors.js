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

Authors.attachSchema(Schemas.Author);
