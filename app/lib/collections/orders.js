Orders = new Mongo.Collection('orders');

Orders.allow({
    insert: function (userId, obj) {
        return true;
    },
    update: function (userId, obj) {
        return AdminPermission(userId);
    },
    remove: function (userId, obj) {
        return AdminPermission(userId);
    }
});

Schemas.Order.i18n("schemas.order");
Orders.attachSchema(Schemas.Order);

