Journals = new Mongo.Collection('journals');
if(Meteor.isServer) {
    Journals._ensureIndex({
        'title': 'text',
        'description': 'text'
    });
}
Journals.allow({
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
Schemas.Journal.i18n("schemas.journal");
Journals.attachSchema(Schemas.Journal);