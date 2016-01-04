Publications = new Mongo.Collection('publications');
if(Meteor.isServer) {
    Publications._ensureIndex({
        'title': 'text',
        'content': 'text'
    });
}
Publications.allow({
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
Schemas.Publication.i18n("schemas.publication");
Publications.attachSchema(Schemas.Publication);